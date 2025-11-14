import { DateTime } from "isoly"
import { Result } from "./Result"
import { Status } from "./Status"
import { Summary } from "./Summary"

export interface Response {
	id: string
	name: string
	type: "REBATE"
	status: Status
	summary: Summary
	result: Result
	createdOn: DateTime
	initiatedOn?: DateTime
	initiatedBy?: string
	cancelledOn?: DateTime
	cancelledBy?: string
}

export namespace Response {}
