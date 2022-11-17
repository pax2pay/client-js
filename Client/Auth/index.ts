import * as model from "../../model"
import { PaxpayFeature } from "../../model/PaxpayFeature"
import { Connection } from "../Connection"

export class Auth {
	#roles?: string[]
	get roles(): string[] | undefined {
		return this.#roles
	}

	set roles(roles: string[] | undefined) {
		this.#roles = roles
	}

	#features?: PaxpayFeature[]
	get features(): PaxpayFeature[] | undefined {
		return this.#features
	}

	set features(features: PaxpayFeature[] | undefined) {
		this.#features = features
	}

	get token(): string | undefined {
		return this.connection.token
	}
	set token(value: string | undefined) {
		this.connection.token = value
	}

	constructor(private connection: Connection) {}
	async login(request: model.LoginRequest) {
		const result = await this.connection.post<model.LoginResponse, 400 | 403 | 404 | 500>("auth/login", request)
		if (!isError(result))
			this.connection.token = result.token
		return result
	}
	async refresh(request: model.RelogWithNewSessionDetailsRequest) {
		const result = await this.connection.post<model.LoginResponse, 400 | 403 | 404 | 500>("auth/relog", request)
		if (!isError(result))
			this.connection.token = result.token
		return result
	}
	static create(connection: Connection) {
		return new Auth(connection)
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
