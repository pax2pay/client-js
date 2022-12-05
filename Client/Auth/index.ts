import * as model from "../../model"
import { PaxpayFeature } from "../../model/PaxpayFeature"
import { Connection } from "../Connection"

export class Auth {
	#roles?: string[]

	set roles(roles: string[] | undefined) {
		this.#roles = roles
		if (roles)
			window.sessionStorage.setItem("roles", roles.join(","))
		else
			window.sessionStorage.removeItem("roles")
	}

	private loadRoles() {
		if (this.#roles)
			return

		const roles = window.sessionStorage.getItem("roles")
		this.#roles = roles ? roles.split(",") : []
	}

	hasRole(role: string) {
		this.loadRoles()

		return this.#roles ? this.#roles.includes(role) : false
	}

	#features?: PaxpayFeature[]

	set features(features: PaxpayFeature[] | undefined) {
		this.#features = features
		if (features)
			window.sessionStorage.setItem("features", features.join(","))
		else
			window.sessionStorage.removeItem("features")
	}

	private loadFeatures() {
		if (this.#features)
			return

		const features = window.sessionStorage.getItem("features")
		this.#features = features ? (features.split(",") as PaxpayFeature[]) : []
	}

	hasFeature(feature: PaxpayFeature) {
		this.loadFeatures()

		return this.#features ? this.#features.includes(feature) : false
	}

	get token(): string | undefined {
		return this.connection.token
	}
	set token(value: string | undefined) {
		this.connection.token = value
	}

	setTempToken(value: string | undefined) {
		if (!value)
			window.sessionStorage.removeItem("authData")
		else
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

	constructor(private connection: Connection) {}
	async login(request: model.LoginRequest) {
		const result = await this.connection.post<model.LoginResponse, 400 | 403 | 404 | 500>("auth/login", request)
		if (!isError(result) && result.token) {
			this.connection.token = result.token
			window.sessionStorage.setItem("authData", JSON.stringify(result))
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
			window.sessionStorage.setItem("authData", JSON.stringify(result))
		}
		return result
	}
	static create(connection: Connection) {
		return new Auth(connection)
	}

	async logout() {
		this.roles = undefined
		this.features = undefined
		window.sessionStorage.removeItem("authData")
		this.connection.token = undefined
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
