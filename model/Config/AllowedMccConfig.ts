import { MCC } from "./MCC"
import { MCCRange } from "./MCCRange"

export interface AllowedMccConfig {
	allowedMccs?: Set<MCC>
	allowedRanges?: Set<MCCRange>
}

export namespace AllowedMccConfig {
	export function is(value: AllowedMccConfig | any): value is AllowedMccConfig {
		return (
			typeof value == "object" &&
			(value.allowedMccs == undefined ||
				(value.allowedMccs instanceof Set && [...value.allowedMccs.values()].every((item: any) => MCC.is(item)))) &&
			(value.allowedRanges == undefined ||
				(value.allowedRanges instanceof Set &&
					[...value.allowedRanges.values()].every((item: any) => MCCRange.is(item))))
		)
	}
}
