import { isly } from "isly"
import { FundingLimitRequest } from "./FundingLimitRequest"
/**
 * Request for updating a funding account. Accounts are mostly immutable, you can only change a few things about them. If any of the values are null, the existing value on the funding account won't be overwritten with null, it'll just be kept the same as is.
 */
export interface UpdateAccountRequest {
	state: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
	friendlyName?: string
	fundingLimit?: FundingLimitRequest
}
export namespace UpdateAccountRequest {
	export const type = isly.object<UpdateAccountRequest>({
		state: isly.string(),
		friendlyName: isly.string().optional(),
		fundingLimit: isly.fromIs("FundingLimitRequest", FundingLimitRequest.is).optional(),
	})
	export const is = type.is
}
