import { isly } from "isly"
import { CardState } from "./CardState"
import { FundingLimitRequest } from "./FundingLimitRequest"
/**
 * Request for updating a funding account. Accounts are mostly immutable, you can only change a few things about them. If any of the values are null, the existing value on the funding account won't be overwritten with null, it'll just be kept the same as is.
 */
export interface UpdateAccountRequest {
	state: CardState
	friendlyName?: string
	fundingLimit?: FundingLimitRequest
}
export namespace UpdateAccountRequest {
	export const type = isly.object<UpdateAccountRequest>({
		state: CardState.type,
		friendlyName: isly.string().optional(),
		fundingLimit: FundingLimitRequest.type.optional(),
	})
	export const is = type.is
}
