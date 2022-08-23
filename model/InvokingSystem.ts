export const invokingSystems = [
	"PORTAL",
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

export type InvokingSystem = typeof invokingSystems[number]

export namespace InvokingSystem {
	export function is(value: unknown): value is InvokingSystem {
		return typeof value == "string" && invokingSystems.includes(value as InvokingSystem)
	}
}
