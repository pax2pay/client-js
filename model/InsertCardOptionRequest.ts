import { isly } from "isly"
import { Criteria } from "./Criteria"
import { InsertCardRequest } from "./InsertCardRequest"
/**
 * The card options that were created for this.
 */
export interface InsertCardOptionRequest {
	criteria: Criteria[]
	card: InsertCardRequest
}

export namespace InsertCardOptionRequest {
	export const type = isly.object<InsertCardOptionRequest>({
		criteria: isly.fromIs("Criteria", Criteria.is).array(),
		card: isly.fromIs("InsertCardRequest", InsertCardRequest.is),
	})
	export const is = type.is
}
