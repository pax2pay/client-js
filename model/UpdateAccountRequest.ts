import { isly } from "isly"
import { AccountState } from "./AccountState"
import { FundingLimitRequest } from "./FundingLimitRequest"
/**
 * Request for updating a funding account. Accounts are mostly immutable, you can only change a few things about them. If any of the values are null, the existing value on the funding account won't be overwritten with null, it'll just be kept the same as is.
 */
export interface UpdateAccountRequest {
	state: AccountState
	friendlyName?: string
	fundingLimit?: FundingLimitRequest
}
export namespace UpdateAccountRequest {
	export const type = isly.object<UpdateAccountRequest>({
		state: isly.fromIs("AccountState", AccountState.is),
		friendlyName: isly.string().optional(),
		fundingLimit: isly.fromIs("FundingLimitRequest", FundingLimitRequest.is).optional(),
	})
	export const is = type.is
}
