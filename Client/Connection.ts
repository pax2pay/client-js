import { default as fetch } from "isomorphic-fetch"
import * as model from "../model"

type DefaultCodes = 503
export class Connection {
	unauthorized: (connection: Connection) => Promise<boolean>
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

	async fetch<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		method: string,
		request?: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		const isMultipart = request && request instanceof FormData
		const cookie = window.sessionStorage.getItem("cookie")
		let requestHeaders: Record<string, string> = { "x-invoking-system": "portal_2" }
		if (!isMultipart)
			requestHeaders = {
				...header,
				...requestHeaders,
				"Content-Type": "application/json; charset=utf-8",
			}
		try {
			const data = JSON.parse(window.sessionStorage.getItem("authData") ?? "{}")
			this.#token = data.token
		} catch (e) {
			if (this.token)
				console.error("Caught exception ", JSON.stringify(e))
		}
		if (this.token)
			requestHeaders["X-Auth-Token"] = this.token
		if (this.assumedOrg)
			requestHeaders["x-assume"] = this.assumedOrg
		if (cookie)
			requestHeaders["x-otp-cookie"] = cookie
		let caughtErrorResponse
		const response = await fetch(
			this.url +
				"/" +
				path +
				(parameters
					? "?" +
					  Object.entries(parameters)
							.map(param => {
								if (Array.isArray(param[1]))
									return `${param[0]}=${param[1].join(",")}`
								else
									return param.join("=")
							})
							.join("&")
					: ""),
			{
				method,
				headers: requestHeaders,
				body: !isMultipart ? request && JSON.stringify(request) : request,
			}
		).catch((error: Error) => {
			caughtErrorResponse = { code: 500, errors: [{ message: error.message }] }
			console.error(error)
		})
		if (caughtErrorResponse)
			return caughtErrorResponse
		if (response && response.headers.has("x-otp-cookie"))
			window.sessionStorage.setItem("cookie", response.headers.get("x-otp-cookie") ?? "")
		//get temp token to set up 2fa before login
		if (response && response.status == 403 && response.url.includes("login") && response.headers.has("X-Auth-Token"))
			window.sessionStorage.setItem("authData", JSON.stringify({ token: response.headers.get("X-Auth-Token") }))

		return !response
			? { code: 503, errors: [{ message: "Service unavailable" }] }
			: response.status == 401 && (await this.unauthorized(this))
			? await this.fetch<Response, Codes>(path, method, request, parameters)
			: response.headers.get("Content-Type")?.startsWith("application/json")
			? response.ok
				? response.headers.has("x-total-count")
					? { list: await response.json(), totalCount: response.headers.get("x-total-count") }
					: await response.json()
				: { status: response.status, ...(await response.json()) }
			: { status: response.status, value: await response.text() }
	}
	async post<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "POST", request, parameters, header)
	}
	async get<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "GET", undefined, parameters, header)
	}
	async put<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "PUT", request, parameters, header)
	}
	async remove<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request?: any,
		parameters?: Record<string, any>,
		header?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
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
