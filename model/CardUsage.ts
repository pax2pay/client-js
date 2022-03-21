export type CardUsage = "SINGLE_USE" | "MULTIPLE_USE" | "SINGLE_USE_ALLOW_TEST_AUTH"

export namespace CardUsage {
	export function is(value: CardUsage | any): value is CardUsage {
		return value == "SINGLE_USE" || value == "MULTIPLE_USE" || value == "SINGLE_USE_ALLOW_TEST_AUTH"
	}
}
