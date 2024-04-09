import * as model from "../../model"
import { PaxpayFeature } from "../../model/PaxpayFeature"
import { Connection } from "../Connection"

export class Auth {
	#roles?: string[]
	#features?: PaxpayFeature[]
	#data: Partial<model.LoginResponse>
	constructor(private connection: Connection) {}
	static create(connection: Connection) {
		return new Auth(connection)
	}
	get roles(): string[] | undefined {
		return (this.#roles ??= window.sessionStorage.getItem("roles")?.split(","))
	}
	set roles(roles: string[] | undefined) {
		this.#roles = roles
		if (roles)
			window.sessionStorage.setItem("roles", roles.join(","))
		else
			window.sessionStorage.removeItem("roles")
	}
	hasRole(role: string): boolean {
		return this.roles?.includes(role) ?? false
	}
	get features(): PaxpayFeature[] | undefined {
		return (this.#features ??= window.sessionStorage.getItem("features")?.split(",") as PaxpayFeature[])
	}
	set features(features: PaxpayFeature[] | undefined) {
		this.#features = features
		if (features)
			window.sessionStorage.setItem("features", features.join(","))
		else
			window.sessionStorage.removeItem("features")
	}
	hasFeature(feature: PaxpayFeature) {
		return this.features?.includes(feature) ?? false
	}
	get data(): Partial<model.LoginResponse> {
		return (this.#data ??= JSON.parse(window.sessionStorage.getItem("authData") ?? "{}"))
	}
	set data(value: Partial<model.LoginResponse> | undefined) {
		this.#data = value ?? {}
		if (value)
			window.sessionStorage.setItem("authData", JSON.stringify(value))
		else
			window.sessionStorage.removeItem("authData")
	}
	get token(): string | undefined {
		return this.connection.token
	}
	set token(value: string | undefined) {
		this.connection.token = value
	}
	setTempToken(value: string) {
		this.data = { token: value }
		this.connection.token = value
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
			this.connection.token = result.token
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
			this.connection.token = result.token
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
			this.connection.token = result.token
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
		this.connection.token = undefined
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
