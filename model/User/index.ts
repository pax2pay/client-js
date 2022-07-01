import { UserChangeRequest as UserUserChangeRequest } from "./UserChangeRequest"
import { UserLimit as UserUserLimit } from "./UserLimit"
import { UserLimitsDeleteRequest as UserUserLimitsDeleteRequest } from "./UserLimitsDeleteRequest"
import { UserLimitsRequest as UserUserLimitsRequest } from "./UserLimitsRequest"
import { UserRequest as UserUserRequest } from "./UserRequest"
import { UserResponse as UserUserResponse } from "./UserResponse"
import { UserRoleResponse as UserUserRoleResponse } from "./UserRoleResponse"
import { UserSearchRequest as UserUserSearchRequest } from "./UserSearchRequest"

export namespace User {
	export type UserChangeRequest = UserUserChangeRequest
	export type UserLimit = UserUserLimit
	export type UserLimitsDeleteRequest = UserUserLimitsDeleteRequest
	export type UserLimitsRequest = UserUserLimitsRequest
	export type UserRequest = UserUserRequest
	export type UserResponse = UserUserResponse
	export type UserRoleResponse = UserUserRoleResponse
	export type UserSearchRequest = UserUserSearchRequest
}
