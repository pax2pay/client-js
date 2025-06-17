import { isly } from "isly"
import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryStatus } from "./BeneficiaryStatus"

export interface BeneficiaryResponse {
	transferDestination: AccountDetailsTransferDestinationResponse
	status: BeneficiaryStatus
	name: string
	beneficiaryId: string
	createdOn: string
	defaultReference?: string
	fullName?: string
	history?: BeneficiaryResponse[]
}

export namespace BeneficiaryResponse {
	export const type = isly.object<BeneficiaryResponse>({
		transferDestination: AccountDetailsTransferDestinationResponse.type,
		status: isly.fromIs("BeneficiaryStatus", BeneficiaryStatus.is),
		name: isly.string(),
		beneficiaryId: isly.string(),
		createdOn: isly.string(),
		defaultReference: isly.string().optional(),
		fullName: isly.string().optional(),
		history: isly.fromIs("BeneficiaryResponse[]", Array.isArray).optional(), // Not checking same type because of risk of being slow
	})
	export const is = type.is
}
