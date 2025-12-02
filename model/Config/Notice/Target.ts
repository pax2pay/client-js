import { isly } from "isly"

// ConfigurableNoticeTarget
export type Target = Target.Organisation | Target.User

export namespace Target {
	export const type = isly.union<Target>(Organisation.type, User.type)
	export const is = type.is

	export type Type = typeof Type.values[number]
	export namespace Type {
		export const values = ["ORGANISATION", "USER"] as const
		export const type = isly.string(values)
		export const is = type.is
	}

	// OrganisationConfigurableNoticeTarget
	export interface Organisation {
		type: "ORGANISATION"
	}
	export namespace Organisation {
		export const type = isly.object<Organisation>({
			type: isly.string("ORGANISATION"),
		})
		export const is = type.is
	}

	// UserConfigurableNoticeTarget
	export interface User {
		type: "USER"
		username: string
	}
	export namespace User {
		export const type = isly.object<User>({
			type: isly.string("USER"),
			username: isly.string(),
		})
		export const is = type.is
	}
}
