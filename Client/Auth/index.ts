import * as model from "../../model"
import { Connection } from "../Connection"
import { Session } from "./Session"

export class Auth {
	#roles?: string[]
	#features?: model.PaxpayFeature[]
	#data: Partial<model.LoginResponse>
	constructor(private connection: Connection) {}
	static create(connection: Connection) {
		return new Auth(connection)
	}

	get roles(): string[] | undefined {
		return (this.#roles ??= Session.roles.get())
	}
	set roles(roles: string[] | undefined) {
		this.#roles = Session.roles.set(roles)
	}
	hasRole(role: string): boolean {
		return this.roles?.includes(role) ?? false
	}
	get features(): model.PaxpayFeature[] | undefined {
		return (this.#features ??= Session.features.get())
	}
	set features(features: model.PaxpayFeature[] | undefined) {
		this.#features = Session.features.set(features)
	}
	hasFeature(feature: model.PaxpayFeature) {
		return this.features?.includes(feature) ?? false
	}
	get data(): Partial<model.LoginResponse> {
		return (this.#data ??= Session.login.get() ?? {})
	}
	set data(value: Partial<model.LoginResponse> | undefined) {
		this.#data = Session.login.set(value) ?? {}
	}
	get token(): string | undefined {
		return this.connection.token
	}
	set token(value: string | undefined) {
		this.connection.token = value
	}
	setTempToken(value: string) {
		this.data = { token: value }
		this.token = value
	}
	isLoggedIn(): boolean {
		return this.data.status == "SUCCESS" ?? false
	}
	async login(request: model.LoginRequest, otp?: string) {
		const result = await this.connection.post<model.LoginResponse, 400 | 403 | 404 | 500>(
			"auth/login",
			request,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
		if (!isError(result) && result.token) {
			this.token = result.token
			this.data = result
		}
		return result
	}
	async refresh(request?: model.RelogWithNewSessionDetailsRequest) {
		let result
		if (request) {
			result = await this.connection.post<model.LoginResponse, 400 | 403 | 404 | 500>("auth/relog", request)
		} else {
			result = await this.connection.get<model.LoginResponse, 400 | 403 | 404 | 500>("auth/relog")
		}
		if (!isError(result)) {
			this.token = result.token
			this.data = result
		}
		return result
	}
	isAssumed(): boolean {
		return this.data.user?.organisation?.code != this.data.organisation
	}
	async assume(
		code: string
	): Promise<model.LoginResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 })> {
		const result = await this.connection.get<model.LoginResponse, 400 | 403 | 404 | 500>(`auth/assume/org/${code}`)
		if (!isError(result)) {
			this.token = result.token
			this.data = result
		}
		return result
	}
	async unassume(): Promise<
		model.LoginResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined
	> {
		return this.data.user?.organisation?.code ? await this.assume(this.data.user.organisation.code) : undefined
	}

	async logout() {
		this.roles = undefined
		this.features = undefined
		this.data = undefined
		this.token = undefined
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
