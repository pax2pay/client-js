import { default as fetch } from "isomorphic-fetch"
import * as model from "../model"

type DefaultCodes = 503
export class Connection {
	unauthorized: (connection: Connection) => Promise<boolean>
	#token?: string
	get token() {
		return this.#token
	}
	set token(value: string | undefined) {
		this.#token = value
	}
	private constructor(readonly url: string, token?: string) {
		this.#token = token
	}

	async fetch<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		method: string,
		request?: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		const headers: Record<string, string> = {
			"Content-Type": "application/json; charset=utf-8",
		}
		const data = JSON.parse(window.sessionStorage.getItem("authData") ?? "{}")
		this.#token = data.token
		if (this.token)
			headers["X-Auth-Token"] = this.token
		const response = await fetch(this.url + "/" + path, {
			method,
			headers,
			body: request && JSON.stringify(request),
		}).catch(_ => undefined)
		return !response
			? { status: 503 }
			: response.status == 401 && (await this.unauthorized(this))
			? await this.fetch<Response, Codes>(path, method, request)
			: response.headers.get("Content-Type")?.startsWith("application/json")
			? response.ok
				? await response.json()
				: { status: response.status, ...(await response.json()) }
			: { status: response.status, value: await response.text() }
	}
	async post<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "POST", request)
	}
	async get<Response, Codes = 400 | 403 | 404 | 500>(
		path: string
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "GET")
	}
	async put<Response, Codes = 400 | 403 | 404 | 500>(
		path: string,
		request: any
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "PUT", request)
	}
	async remove<Response, Codes = 400 | 403 | 404 | 500>(
		path: string
	): Promise<Response | (model.ErrorResponse & { status: Codes | DefaultCodes })> {
		return await this.fetch<Response, Codes>(path, "DELETE")
	}
	static open(url: string | undefined, token: string | undefined): Connection | undefined {
		return url ? new Connection(url, token) : undefined
	}
	static isError(
		value: (model.ErrorResponse & { status: number }) | any
	): value is model.ErrorResponse & { status: number } {
		return typeof value == "object" && typeof value.status == "number" && value.status >= 400
	}
}
