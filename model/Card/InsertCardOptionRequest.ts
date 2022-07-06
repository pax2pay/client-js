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
	export function is(value: InsertCardOptionRequest | any): value is InsertCardOptionRequest {
		return (
			typeof value == "object" &&
			Array.isArray(value.criteria) &&
			value.criteria.every((item: any) => Criteria.is(item)) &&
			InsertCardRequest.is(value.card)
		)
	}
}
