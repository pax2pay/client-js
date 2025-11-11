import { isly } from "isly"

export type DayOfWeek = typeof DayOfWeek.values[number]

export namespace DayOfWeek {
	export const values = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] as const
	export const type = isly.string<DayOfWeek>(values)
	export const is = type.is
}
