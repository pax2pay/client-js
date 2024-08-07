import { Date as isolyDate, DateTime as isolyDateTime } from "isoly"
import { isly } from "isly"

export interface Range<T> {
	start?: T
	end?: T
}

export namespace Range {
	export const type = isly.object<Range<any>>({
		start: isly.any().optional(),
		end: isly.any().optional(),
	})
	export const is = type.is

	export namespace Date {
		export const type = isly.object<Range<isolyDate>>({
			start: isly.fromIs("Date", isolyDate.is).optional(),
			end: isly.fromIs("Date", isolyDate.is).optional(),
		})
		export const is = type.is
	}
	export namespace DateTime {
		export const type = isly.object<Range<isolyDateTime>>({
			start: isly.fromIs("DateTime", isolyDateTime.is).optional(),
			end: isly.fromIs("DateTime", isolyDateTime.is).optional(),
		})
		export const is = type.is
	}
	export namespace Number {
		const isNumber = (v: any): v is number => typeof v == "number" && !isNaN(v)
		export const type = isly
			.object<Range<number>>({
				start: isly.fromIs("number", isNumber).optional(),
				end: isly.fromIs("number", isNumber).optional(),
			})
			.extend(isly.fromIs("end can't be after", v => v.start > v.end))
		export const is = type.is
	}
}
