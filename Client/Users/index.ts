import * as model from "../../model"
import { Collection } from "../Collection"
import { Connection } from "../Connection"
import { Resource } from "../Resource"
import { User } from "../User"

export class Users extends Collection<model.UserResponse, model.UserSearchRequest, model.UserRequest> {
	protected folder = "users"
	private constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.UserResponse): string {
		return [this.folder, resource.username].join("/")
	}
	protected createResource(response: model.UserResponse): Resource<model.UserResponse, { [key: string]: any }> {
		return new User(this.connection, [this.folder, response.username].join("/"), response)
	}
	static create(connection: Connection) {
		return new Users(connection)
	}
	protected map(response: model.UserResponse) {
		return Object.assign(new User(this.connection, this.getResourcePath(response), response), response)
	}
	async getUser(username: string) {
		const result = await this.connection.get<model.UserResponse>(`${this.folder}/${username}`)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
}
