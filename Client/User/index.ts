import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class User extends Resource<model.UserResponse, model.UserResponse> {
	constructor(connection: Connection, folder: string, backend: model.UserResponse) {
		super(connection, folder, backend)
	}
	async getUsersActiveRoles(username: string, token: string): Promise<string[] | model.ErrorResponse> {
		this.connection.token = token
		const result = await this.connection.get<string[]>(`users/${username}/roles/minified`)
		return result
	}
}
