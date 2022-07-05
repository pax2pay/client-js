const invokingSystem = [
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

export type InvokingSystem = typeof invokingSystem[number]

export namespace InvokingSystem {
	export function is(value: unknown): value is InvokingSystem {
		return typeof value == "string" && invokingSystem.includes(value as InvokingSystem)
	}
}
