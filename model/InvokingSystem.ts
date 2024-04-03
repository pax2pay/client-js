import { isly } from "isly"

export type InvokingSystem = typeof InvokingSystem.types[number]

export namespace InvokingSystem {
	export const types = [
		"PORTAL",
		"PORTAL_2",
		"REST_API",
		"FAB",
		"REST_API_PORTAL",
		"REST_API_EXTERNAL",
		"SOAP_API_FAB",
		"SOAP_API_EXTERNAL",
		"CRON",
		"UNKNOWN",
		"UNDEFINED",
	] as const
	export const type = isly.string<InvokingSystem>(types)
	export const is = type.is
}
