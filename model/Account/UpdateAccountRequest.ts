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
	export function is(value: UpdateAccountRequest | any): value is UpdateAccountRequest {
		return (
			typeof value == "object" &&
			AccountState.is(value.state) &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.fundingLimit == undefined || FundingLimitRequest.is(value.fundingLimit))
		)
	}
}
