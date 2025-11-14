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
}

export namespace Response {}
