const conversionRateSources = ["STATIC", "BANK_OF_ENGLAND_DAILY", "EXCHANGE_RATES_IO"] as const

export type ConversionRateSource = typeof conversionRateSources[number]

export namespace ConversionRateSource {
	export function is(value: ConversionRateSource | any): value is ConversionRateSource {
		return typeof value == "string" && conversionRateSources.includes(value as ConversionRateSource)
	}
}
