import { DateTime } from "isoly"
import { isly } from "isly"
import { Result } from "./Result"
import { Status } from "./Status"
import { Summary } from "./Summary"

export interface Response {
	id: string
	name: string
	type: "REBATE"
	status: Status
	summary: Summary
	result?: Result
	createdOn: DateTime
	createdBy: string
	runOn?: DateTime
	runBy?: string
	cancelledOn?: DateTime
	cancelledBy?: string
}

export namespace Response {
	export const type = isly.object<Response>({
		id: isly.string(),
		name: isly.string(),
		type: isly.string("REBATE"), // BatchRequestType - but only REBATE is needed for now
		status: Status.type,
		summary: Summary.type,
		result: Result.type.optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is),
		createdBy: isly.string(),
		runOn: isly.fromIs("DateTime", DateTime.is).optional(),
		runBy: isly.string().optional(),
		cancelledOn: isly.fromIs("DateTime", DateTime.is).optional(),
		cancelledBy: isly.string().optional(),
	})
	export const is = type.is
}
