import { CreateRolesetRequest as RolesCreateRolesetRequest } from "./CreateRolesetRequest"
import { Inclusion as RolesInclusion } from "./Inclusion"
import { RoleResponse as RolesRoleResponse } from "./RoleResponse"
import { RolesetResponse as RolesRolesetResponse } from "./RolesetResponse"
import { SearchRolesetsRequest as RolesSearchRolesetsRequest } from "./SearchRolesetsRequest"
import { UpdateRolesetRequest as RolesUpdateRolesetRequest } from "./UpdateRolesetRequest"

export namespace Role {
	export type CreateRolesetRequest = RolesCreateRolesetRequest
	export const CreateRolesetRequest = RolesCreateRolesetRequest
	export type Inclusion = RolesInclusion
	export const Inclusion = RolesInclusion
	export type RoleResponse = RolesRoleResponse
	export const RoleResponse = RolesRoleResponse
	export type RolesetResponse = RolesRolesetResponse
	export const RolesetResponse = RolesRolesetResponse
	export type SearchRolesetsRequest = RolesSearchRolesetsRequest
	export const SearchRolesetsRequest = RolesSearchRolesetsRequest
	export type UpdateRolesetRequest = RolesUpdateRolesetRequest
	export const UpdateRolesetRequest = RolesUpdateRolesetRequest
}
