import { isly } from "isly"

export type BeneficiaryRequestStatus = typeof BeneficiaryRequestStatus.values[number]

//ACTIVE_REBATE and ACTIVE_MERCHANT are deprecated, but we keep them here for backward compatibility
export namespace BeneficiaryRequestStatus {
	export const values = ["ACTIVE", "ACTIVE_REBATE", "ACTIVE_MERCHANT", "DELETED", "OUTDATED", "INACTIVE"] as const
	export const type = isly.string<BeneficiaryRequestStatus>(values)
	export const is = type.is
}
