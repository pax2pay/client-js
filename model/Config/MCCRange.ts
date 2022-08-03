export interface MCCRange {
	start?: string
	end?: string
	description?: string
	reserved?: boolean
}

export namespace MCCRange {
	export function is(value: MCCRange | any): value is MCCRange {
		return (
			typeof value == "object" &&
			(value.start == undefined || typeof value.start == "string") &&
			(value.end == undefined || typeof value.end == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.reserved == undefined || typeof value.reserved == "boolean")
		)
	}
}
