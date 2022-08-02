import { Status as UserStatus } from "./Status"
import { UserChangeRequest as UserUserChangeRequest } from "./UserChangeRequest"
import { UserLimit as UserUserLimit } from "./UserLimit"
import { UserLimitsDeleteRequest as UserUserLimitsDeleteRequest } from "./UserLimitsDeleteRequest"
import { UserLimitsRequest as UserUserLimitsRequest } from "./UserLimitsRequest"
import { UserRequest as UserUserRequest } from "./UserRequest"
import { UserResponse as UserUserResponse } from "./UserResponse"
import { UserRoleResponse as UserUserRoleResponse } from "./UserRoleResponse"
import { UserSearchRequest as UserUserSearchRequest } from "./UserSearchRequest"

export namespace User {
	export type Status = UserStatus
	export const Status = UserStatus
	export type UserChangeRequest = UserUserChangeRequest
	export const UserChangeRequest = UserUserChangeRequest
	export type UserLimit = UserUserLimit
	export const UserLimit = UserUserLimit
	export type UserLimitsDeleteRequest = UserUserLimitsDeleteRequest
	export const UserLimitsDeleteRequest = UserUserLimitsDeleteRequest
	export type UserLimitsRequest = UserUserLimitsRequest
	export const UserLimitsRequest = UserUserLimitsRequest
	export type UserRequest = UserUserRequest
	export const UserRequest = UserUserRequest
	export type UserResponse = UserUserResponse
	export const UserResponse = UserUserResponse
	export type UserRoleResponse = UserUserRoleResponse
	export const UserRoleResponse = UserUserRoleResponse
	export type UserSearchRequest = UserUserSearchRequest
	export const UserSearchRequest = UserUserSearchRequest
}
