const creatingSystem = [
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

export type CreatingSystem = typeof creatingSystem[number]

export namespace CreatingSystem {
	export function is(value: unknown): value is CreatingSystem {
		return typeof value == "string" && creatingSystem.includes(value as CreatingSystem)
	}
}
