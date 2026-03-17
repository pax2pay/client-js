import { default as fetch } from "isomorphic-fetch"
import * as model from "../model"
import { Session } from "./Auth/Session"

export class Connection {
	unauthorized: (connection: Connection) => Promise<boolean>
	#pax2payPortalLanguage?: string
	set pax2payPortalLanguage(value: string) {
		this.#pax2payPortalLanguage = value
	}

	#token?: string
	#assumedOrg?: string
	get token() {
		return this.#token
	}
	set token(value: string | undefined) {
		this.#token = value
	}
	private constructor(readonly url: string, token?: string) {
		this.#token = token
	}

	get assumedOrg() {
		return this.#assumedOrg
	}
	set assumedOrg(value: string | undefined) {
		this.#assumedOrg = value
	}
	async fetch<T, Codes = 400 | 403 | 404 | 500>(
		path: string,
		method: string,
		request?: any,
		parameters?: Record<string, any>,
		overrides?: Record<string, string>
	): Promise<T | (model.ErrorResponse & { status?: number; value?: string })> {
		const url = this.buildUrl(path, parameters)
		const headers = this.prepareHeaders(request, overrides)
		const body = this.prepareBody(request)

		try {
			const response = await fetch(url, { method, headers, body })

			// Handle Side Effects (Cookies/2FA)
			this.handleSessionSideEffects(response)

			// Handle Auth Challenges
			if (response.status === 401 && (await this.unauthorized(this))) {
				return this.fetch<T, Codes>(path, method, request, parameters, overrides)
			}

			return await this.parseResponse(response)
		} catch (error: any) {
			console.error("Fetch Error:", error)
			return { code: 500, errors: [{ message: error.message || "Internal Server Error" }] }
		}
	}
	private buildUrl(path: string, parameters?: Record<string, any>): string {
		const url = new URL(`${this.url}/${path}`)
		if (parameters) {
			Object.entries(parameters).forEach(([key, value]) => {
				if (value === undefined)
					return
				// Handles arrays as comma-separated strings
				url.searchParams.append(key, Array.isArray(value) ? value.join(",") : String(value))
			})
		}
		return url.toString()
	}
	private prepareBody(request: any): BodyInit | undefined {
		if (!request)
			return undefined
		if (request instanceof FormData || request instanceof Blob)
			return request

		// Clean strings by trimming before stringifying
		return JSON.stringify(request, (_, v) => (typeof v === "string" ? v.trim() : v))
	}
	private prepareHeaders(request: any, overrides?: Record<string, string>): Record<string, string> {
		const headers: Record<string, string> = {
			"x-invoking-system": "portal_2",
			...overrides,
		}

		// Content-Type Logic
		if (request instanceof Blob) {
			headers["Content-Type"] = "text/csv; charset=utf-8"
		} else if (!(request instanceof FormData)) {
			headers["Content-Type"] = "application/json; charset=utf-8"
		}

		// Session & Auth
		const token = Session.authentication.get()?.token || this.token
		if (token)
			headers["X-Auth-Token"] = token
		if (this.#pax2payPortalLanguage)
			headers["Pax2pay-Portal-Language"] = this.#pax2payPortalLanguage
		if (this.assumedOrg)
			headers["x-assume"] = this.assumedOrg

		const cookie = window.localStorage.getItem("cookie")
		if (cookie)
			headers["x-otp-cookie"] = cookie

		const publicKey = Session.publicKey.get()
		if (publicKey)
			headers["cde-public-key"] = publicKey

		return headers
	}

	private handleSessionSideEffects(response: Response): void {
		const otpCookie = response.headers.get("x-otp-cookie")
		if (otpCookie)
			window.localStorage.setItem("cookie", otpCookie)

		const isLoginPath = response.url.includes("login") || response.url.includes("sso/google")
		if (response.status === 403 && isLoginPath && response.headers.has("X-Auth-Token")) {
			Session.authentication.set({ token: response.headers.get("X-Auth-Token") ?? undefined })
		}
	}
	private async parseResponse(response: Response): Promise<any> {
		if (!response.ok && response.status === 503) {
			return { code: 503, errors: [{ message: "Service unavailable" }] }
		}

		const contentType = response.headers.get("Content-Type") ?? ""

		if (contentType.includes("application/json")) {
			const json = await response.json()
			if (!response.ok)
				return { status: response.status, ...json }

			const totalCount = response.headers.get("x-total-count")
			return totalCount ? { list: json, totalCount } : json
		}

		// Fallback for text/csv or plain text
		return { status: response.status, value: await response.text() }
	}
	async oldfetch<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		method: string,
		request?: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status?: number; value?: string })> {
		const isMultipart = request && request instanceof FormData
		const isBlob = request && request instanceof Blob
		const cookie = window.localStorage.getItem("cookie")
		const publicKey = Session.publicKey.get()
		let requestHeaders: Record<string, string> = { "x-invoking-system": "portal_2" }
		if (!isMultipart)
			requestHeaders = {
				...header,
				...requestHeaders,
				"Content-Type": "application/json; charset=utf-8",
			}
		if (isBlob) {
			requestHeaders = {
				...header,
				...requestHeaders,
				"Content-Type": "text/csv; charset=utf-8",
			}
		}
		try {
			const data = Session.authentication.get()
			this.#token = data?.token
		} catch (e) {
			if (this.token)
				console.error("Caught exception ", JSON.stringify(e))
		}
		if (this.token)
			requestHeaders["X-Auth-Token"] = this.token
		if (this.#pax2payPortalLanguage)
			requestHeaders["Pax2pay-Portal-Language"] = this.#pax2payPortalLanguage
		if (this.assumedOrg)
			requestHeaders["x-assume"] = this.assumedOrg
		if (cookie)
			requestHeaders["x-otp-cookie"] = cookie
		if (publicKey)
			requestHeaders["cde-public-key"] = publicKey
		let caughtErrorResponse
		const response = await fetch(
			this.url +
				"/" +
				path +
				(parameters
					? "?" +
					  Object.entries(parameters)
							.map(([key, value]) =>
								Array.isArray(value) ? `${key}=${value.join(",")}` : value != undefined ? `${key}=${value}` : undefined
							)
							.filter(param => param != undefined)
							.join("&")
					: ""),
			{
				method,
				headers: requestHeaders,
				body:
					!isMultipart && !isBlob
						? request && JSON.stringify(request, (_, value) => (typeof value == "string" ? value.trim() : value))
						: request,
			}
		).catch((error: Error) => {
			caughtErrorResponse = { code: 500, errors: [{ message: error.message }] }
			console.error(error)
		})
		if (caughtErrorResponse)
			return caughtErrorResponse
		if (response && response.headers.has("x-otp-cookie"))
			window.localStorage.setItem("cookie", response.headers.get("x-otp-cookie") ?? "")
		//get temp token to set up 2fa before login
		if (
			response &&
			response.status == 403 &&
			(response.url.includes("login") || response.url.includes("sso/google")) &&
			response.headers.has("X-Auth-Token")
		)
			Session.authentication.set({ token: response.headers.get("X-Auth-Token") ?? undefined })

		return !response
			? { code: 503, errors: [{ message: "Service unavailable" }] }
			: response.status == 401 && (await this.unauthorized(this))
			? await this.fetch<Response, Codes>(path, method, request, parameters)
			: response.headers.get("Content-Type")?.startsWith("application/json")
			? response.ok
				? response.headers.has("x-total-count")
					? ({ list: await response.json(), totalCount: response.headers.get("x-total-count") } as Response)
					: await response.json()
				: { status: response.status, ...(await response.json()) }
			: { status: response.status, value: await response.text() }
	}
	async post<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status?: number; value?: string })> {
		return await this.fetch<Response, Codes>(path, "POST", request, parameters, header)
	}
	async get<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status?: number; value?: string })> {
		return await this.fetch<Response, Codes>(path, "GET", undefined, parameters, header)
	}
	async put<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status?: number; value?: string })> {
		return await this.fetch<Response, Codes>(path, "PUT", request, parameters, header)
	}
	async remove<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request?: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status?: number; value?: string })> {
		return await this.fetch<Response, Codes>(path, "DELETE", request, parameters, header)
	}
	static open(url: string, token: string | undefined): Connection {
		return new Connection(url, token)
	}
	static isError(
		value: (model.ErrorResponse & { status: number }) | any
	): value is model.ErrorResponse & { status: number } {
		return typeof value == "object" && typeof value.status == "number" && value.status >= 400
	}
}
