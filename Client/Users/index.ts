import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Users extends List<model.UserResponse> {
	protected readonly folder = "users"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Users(connection)
	}
	async deleteUser(username: string): Promise<model.UserResponse | model.ErrorResponse> {
		return await this.connection.remove<model.UserResponse>(`${this.folder}/${username}`)
	}
	async create(request: model.UserRequest) {
		return await this.connection.post<model.UserResponse>(this.folder, request)
	}
	async getAllUsers(): Promise<model.UserResponse[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: model.UserResponse[]; totalCount: number }>(this.folder, {
			size: 500,
			sort: "username",
		})
		return this.extractResponse(response)
	}
	async getUser(username: string): Promise<model.UserResponse | model.ErrorResponse> {
		return await this.connection.get<model.UserResponse>(`${this.folder}/${username}`)
	}
	async getUsersActiveRoles(username: string): Promise<string[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: string[]; totalCount: number }>(
			`${this.folder}/${username}/roles/minified`
		)
		return this.extractResponse<string>(response)
	}
	async getUsersRoles(username: string): Promise<model.UserRoleResponse | model.ErrorResponse> {
		return await this.connection.get<model.UserRoleResponse>(`${this.folder}/${username}/roles`)
	}
	async resetPassword(username: string): Promise<model.PasswordResetResponse | model.ErrorResponse> {
		return await this.connection.post<model.PasswordResetResponse>(`auth/passwordreset`, { username: username })
	}
	async updateRolesetOnUser(username: string, roleset: string): Promise<model.UserRoleResponse | model.ErrorResponse> {
		return await this.connection.put<model.UserRoleResponse>(
			`${this.folder}/${username}/rolesets/${roleset}`,
			undefined
		)
	}
	async addRolesetOnUser(username: string, roleset: string): Promise<model.UserRoleResponse | model.ErrorResponse> {
		return await this.connection.post<model.UserRoleResponse>(
			`${this.folder}/${username}/rolesets/${roleset}`,
			undefined
		)
	}
	async updateUser(
		username: string,
		request: model.UserChangeRequest
	): Promise<model.UserResponse | model.ErrorResponse> {
		return await this.connection.put<model.UserResponse>(`${this.folder}/${username}`, request)
	}
	async checkUsernameAvailability(username: string): Promise<model.UsernameAvailabilityResponse | model.ErrorResponse> {
		return await this.connection.get<model.UsernameAvailabilityResponse>(`${this.folder}/username/${username}`)
	}
	async checkPassword(
		request: model.PasswordValidateRequest
	): Promise<model.PasswordValidateResponse | model.ErrorResponse> {
		return await this.connection.post<model.PasswordValidateResponse>(`${this.folder}/password/check`, request)
	}
	async changePassword(
		request: model.PasswordChangeRequest,
		otp?: string
	): Promise<model.UserResponse | model.ErrorResponse> {
		return await this.connection.put<model.UserResponse>(
			`${this.folder}/password`,
			request,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async setUpTwoFactorAuthentication(
		username: string,
		otp?: string,
		tempToken?: string
	): Promise<model.TwoFactorAuthenticationRegistrationResponse | model.ErrorResponse> {
		let header = {}
		if (otp)
			header = { ...header, "x-otp": otp }
		if (tempToken)
			header = { ...header, "X-Auth-Token": tempToken }
		return await this.connection.post<model.TwoFactorAuthenticationRegistrationResponse>(
			`${this.folder}/${username}/two-factor`,
			{},
			undefined,
			header
		)
	}
	async removeTwoFactorAuthentication(username: string, otp: string): Promise<void | model.ErrorResponse> {
		return await this.connection.remove(`${this.folder}/${username}/two-factor`, undefined, undefined, { "x-otp": otp })
	}
	async searchUsers(
		request: model.UserSearchRequest,
		parameters?: Record<string, any>
	): Promise<model.UserResponse[] | model.ErrorResponse> {
		const result = await this.connection.post<{ list: model.UserResponse[]; totalCount: number }>(
			`${this.folder}/searches`,
			request,
			parameters
		)
		return this.extractResponse(result)
	}
	async searchUsersPaginated(
		request: model.UserSearchRequest,
		previous?: Paginated<model.UserResponse>,
		page?: number,
		size?: number,
		sort = "username,asc"
	): Promise<model.ErrorResponse | Paginated<model.UserResponse>> {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.UserResponse[]; totalCount: number } | model.UserResponse[]>(
					`${this.folder}/searches`,
					request,
					{
						page: page,
						size: size,
						sort: sort,
					}
				),
			request,
			page,
			size,
			sort
		)
	}
	async getAllUsersPaginated(
		previous?: Paginated<model.UserResponse>,
		page?: number,
		size?: number,
		sort = "username,asc",
		providerCode = "modulr"
	): Promise<model.ErrorResponse | Paginated<model.UserResponse>> {
		return await this.getNextPaginated(
			previous,
			(page, size, sort) =>
				this.connection.get<{ list: model.UserResponse[]; totalCount: number } | model.UserResponse[]>(this.folder, {
					page: page,
					size: size,
					sort: sort,
					provider: providerCode,
				}),
			undefined,
			page,
			size,
			sort
		)
	}
}
