import { isly } from "isly"
import { Configuration as TConfguration } from "./Configuration"
import { Type as TargetType } from "./Type"
// ConfigurableNoticeTarget
export type Target = Target.Organisation | Target.User

export namespace Target {
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
	export const type = isly.union<Target>(Organisation.type, User.type)
	export const is = type.is

	export import Configuration = TConfguration
	export import Type = TargetType
}
