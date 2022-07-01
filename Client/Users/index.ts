import * as model from "../../model"
import { Collection } from "../Collection"
import { Connection } from "../Connection"
import { Resource } from "../Resource"
import { User } from "../User"

export class Users extends Collection<model.User.UserResponse, model.User.UserSearchRequest, model.User.UserRequest> {
	protected folder = "users"
	private constructor(connection: Connection) {
		super(connection)
	}
	protected createResource(
		response: model.User.UserResponse
	): Resource<model.User.UserResponse, { [key: string]: any }> {
		return new User(this.connection, [this.folder, response.username].join("/"), response)
	}
	static create(connection: Connection) {
		return new Users(connection)
	}
	async getUsersActiveRoles(username: string, token: string): Promise<string[] | model.ErrorResponse> {
		this.connection.token = token
		const result = await this.connection.get<string[]>(`users/${username}/roles/minified`)
		return result
	}
}
