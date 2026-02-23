import { isly } from "isly"
import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { BeneficiarySubType } from "./BeneficiarySubType"
import { TransferDestinationResponse } from "./TransferDestinationResponse"

export interface BeneficiaryResponse<
	T extends TransferDestinationResponse = AccountDetailsTransferDestinationResponse
> {
	transferDestination: T
	status: BeneficiaryStatus
	name: string
	beneficiaryId: string
	createdOn: string
	subType?: BeneficiarySubType
	defaultReference?: string
	rebateQualifier?: string
	history?: BeneficiaryResponse<T>[]
}

export namespace BeneficiaryResponse {
	export const type = isly.object<BeneficiaryResponse<TransferDestinationResponse>>({
		transferDestination: isly.fromIs("TransferDestinationResponse", TransferDestinationResponse.is),
		status: isly.fromIs("BeneficiaryStatus", BeneficiaryStatus.is),
		name: isly.string(),
		beneficiaryId: isly.string(),
		createdOn: isly.string(),
		subType: isly.fromIs("BeneficiarySubType", BeneficiarySubType.is).optional(),
		defaultReference: isly.string().optional(),
		rebateQualifier: isly.string().optional(),
		history: isly.fromIs("BeneficiaryResponse[]", Array.isArray).optional(), // Not checking same type because of risk of being slow
	})
	export const is = type.is
}
