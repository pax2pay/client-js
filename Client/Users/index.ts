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
	async getAllUsers(
		withCount?: boolean
	): Promise<{ list: model.UserResponse[]; totalCount: number } | model.UserResponse[] | model.ErrorResponse> {
		let result
		result = await this.connection.get<{ list: model.UserResponse[]; totalCount: number }>(
			`users?size=500&sort=username`
		)
		if (!model.ErrorResponse.is(result) && !withCount)
			result = result.list
		return result
	}
	async getCategory(): Promise<string[] | model.ErrorResponse> {
		const result = await this.connection.get<string[]>(`users/category`)
		return result
	}
	async getRolesets(
		withCount?: boolean
	): Promise<{ list: model.RolesetResponse[]; totalCount: number } | model.RolesetResponse[] | model.ErrorResponse> {
		let result
		result = await this.connection.get<{ list: model.RolesetResponse[]; totalCount: number }>(`rolesets`)
		if (!model.ErrorResponse.is(result) && !withCount)
			result = result.list
		return result
	}
	async getUser(username: string): Promise<model.UserResponse | model.ErrorResponse> {
		const result = await this.connection.get<model.UserResponse>(`users/${username}`)
		return result
	}
	async getUsersActiveRoles(
		username: string,
		token: string,
		withCount?: boolean
	): Promise<{ list: string[]; totalCount: number } | string[] | model.ErrorResponse> {
		this.connection.token = token
		let result
		result = await this.connection.get<{ list: string[]; totalCount: number }>(`users/${username}/roles/minified`)
		if (!model.ErrorResponse.is(result) && !withCount)
			result = result.list
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
