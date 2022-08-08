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
	protected createResource(response: model.UserResponse): Resource<model.UserResponse, { [key: string]: any }> {
		return new User(this.connection, [this.folder, response.username].join("/"), response)
	}
	static create(connection: Connection) {
		return new Users(connection)
	}
	async deleteUser(username: string): Promise<model.UserResponse | model.ErrorResponse> {
		const result = await this.connection.remove<model.UserResponse>(`users/${username}`)
		return result
	}
	async getAllUsers(): Promise<model.UserResponse[] | model.ErrorResponse> {
		const result = await this.connection.get<model.UserResponse[]>(`users?size=500`)
		return result
	}
	async getCategory(): Promise<string[] | model.ErrorResponse> {
		const result = await this.connection.get<string[]>(`users/category`)
		return result
	}
	async getRolesets(): Promise<model.RolesetResponse[] | model.ErrorResponse> {
		const result = await this.connection.get<model.RolesetResponse[]>(`rolesets`)
		return result
	}
	async getUser(username: string): Promise<model.UserResponse | model.ErrorResponse> {
		const result = await this.connection.get<model.UserResponse>(`users/${username}`)
		return result
	}
	async getUsersActiveRoles(username: string, token: string): Promise<string[] | model.ErrorResponse> {
		this.connection.token = token
		const result = await this.connection.get<string[]>(`users/${username}/roles/minified`)
		return result
	}
	async resetPassword(username: string): Promise<model.PasswordResetResponse | model.ErrorResponse> {
		const result = await this.connection.post<model.PasswordResetResponse>(`auth/passwordreset`, { username: username })
		return result
	}
	async updateRolesetOnUser(username: string, roleset: string): Promise<model.UserRoleResponse | model.ErrorResponse> {
		const result = await this.connection.put<model.UserRoleResponse>(`users/${username}/rolesets/${roleset}`, undefined)
		return result
	}
	async updateUser(
		username: string,
		request: model.UserChangeRequest
	): Promise<model.UserResponse | model.ErrorResponse> {
		const result = await this.connection.put<model.UserResponse>(`users/${username}`, request)
		return result
	}
}
