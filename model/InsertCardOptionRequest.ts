import { Criteria } from "./Criteria"
import { InsertCardRequest } from "./InsertCardRequest"
/**
 * The card options that were created for this.
 */
export interface InsertCardOptionRequest {
	criteria: Criteria[]
	card: InsertCardRequest
}
