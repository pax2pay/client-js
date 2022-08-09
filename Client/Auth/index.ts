import * as model from "../../model"
import { Connection } from "../Connection"

export class Auth {
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
	async assume(code?: string) {
		return await this.connection.get<model.LoginResponse, 400 | 403 | 404 | 500>(`auth/assume/org/${code}`)
	}
	static create(connection: Connection) {
		return new Auth(connection)
	}
}

function isError(value: model.ErrorResponse | any): value is model.ErrorResponse {
	return typeof value == "object" && typeof value.code == "number"
}
