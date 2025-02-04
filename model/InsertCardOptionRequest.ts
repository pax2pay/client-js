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
		criteria: Criteria.type.array(),
		card: InsertCardRequest.type,
	})
	export const is = type.is
}
