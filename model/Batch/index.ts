import { Response as BResponse } from "./Response"
import { Result as BResult } from "./Result"
import { Status as BStatus } from "./Status"
import { Summary as BSummary } from "./Summary"
import { Type as BType } from "./Type"

export namespace Batch {
	export import Response = BResponse
	export import Type = BType
	export import Result = BResult
	export import Status = BStatus
	export import Summary = BSummary
}
