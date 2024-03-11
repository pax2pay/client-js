import * as model from "../../model"
import { PaxpayFeature } from "../../model/PaxpayFeature"
import { Connection } from "../Connection"

export class Auth {
	#roles?: string[]
	#features?: PaxpayFeature[]
	constructor(private connection: Connection) {}
	set roles(roles: string[] | undefined) {
		this.#roles = roles
		if (roles)
			window.sessionStorage.setItem("roles", roles.join(","))
		else
			window.sessionStorage.removeItem("roles")
	}
	set features(features: PaxpayFeature[] | undefined) {
		this.#features = features
		if (features)
			window.sessionStorage.setItem("features", features.join(","))
		else
			window.sessionStorage.removeItem("features")
	}
	get token(): string | undefined {
		return this.connection.token
	}
	set token(value: string | undefined) {
		this.connection.token = value
	}
	static create(connection: Connection) {
		return new Auth(connection)
	}
	private loadRoles() {
		if (this.#roles)
			return
		const roles = window.sessionStorage.getItem("roles")
		this.#roles = roles ? roles.split(",") : []
	}
	private loadFeatures() {
		if (this.#features)
			return
		const features = window.sessionStorage.getItem("features")
		this.#features = features ? (features.split(",") as PaxpayFeature[]) : []
	}
	data(): Record<string, any> {
		return JSON.parse(window.sessionStorage.getItem("authData") ?? "{}")
	}
	hasRole(role: string) {
		this.loadRoles()
		return this.#roles ? this.#roles.includes(role) : false
	}
	hasFeature(feature: PaxpayFeature) {
		this.loadFeatures()
		return this.#features ? this.#features.includes(feature) : false
	}
	tokenExpiry(): string | undefined {
		return JSON.parse(window.sessionStorage.getItem("authData") ?? "{}").expiry
	}
	getOrganisation(): string {
		return JSON.parse(window.sessionStorage.getItem("authData") ?? "{}").organisation
	}
	setTempToken(value: string) {
		window.sessionStorage.setItem("authData", JSON.stringify({ token: value }))
		this.connection.token = value
	}
	isLoggedIn(): boolean {
		const data = window.sessionStorage.getItem("authData")
		if (!data)
			return false
		else
			return JSON.parse(data)?.status == "SUCCESS"
	}
	isAssumed(): boolean {
		const data = this.data()
		return data.user?.organisation?.code != data.organisation
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
			window.sessionStorage.setItem("authData", JSON.stringify(result))
		}
		return result
	}
	async logout() {
		this.roles = undefined
		this.features = undefined
		window.sessionStorage.removeItem("authData")
		this.connection.token = undefined
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
			window.sessionStorage.setItem("authData", JSON.stringify(result))
		}
		return result
	}
	async assume(
		code: string
	): Promise<model.LoginResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 })> {
		const result = await this.connection.get<model.LoginResponse, 400 | 403 | 404 | 500>(`auth/assume/org/${code}`)
		if (!isError(result)) {
			this.connection.token = result.token
			window.sessionStorage.setItem("authData", JSON.stringify(result))
		}
		return result
	}

	async unassume(): Promise<
		model.LoginResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined
	> {
		const data = this.data()
		let result: model.LoginResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined
		if (!Object.keys(data).length)
			result = undefined
		else
			result = await this.assume(data.user.organisation.code)

		return result
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
