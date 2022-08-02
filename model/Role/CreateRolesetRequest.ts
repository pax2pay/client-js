export interface CreateRolesetRequest {
	name: string
	description?: string
	roles: string[]
}

export namespace CreateRolesetRequest {
	export function is(value: CreateRolesetRequest | any): value is CreateRolesetRequest {
		return (
			typeof value == "object" &&
			typeof value.name == "string" &&
			(value.description == undefined || typeof value.desc == "string") &&
			Array.isArray(value.roles) &&
			value.roles.every((item: any) => typeof item == "string")
		)
	}
}
