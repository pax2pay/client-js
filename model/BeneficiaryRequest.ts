import { isly } from "isly"
import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationRequest
	defaultReference?: string
	name?: string
	status?: BeneficiaryStatus
	rebateQualifier?: string
}
export namespace BeneficiaryRequest {
	export const type = isly.object<BeneficiaryRequest>({
		transferDestination: TransferDestinationRequest.type,
		defaultReference: isly.string().optional(),
		name: isly.string().optional(),
		status: isly.fromIs("BeneficiaryStatus", BeneficiaryStatus.is).optional(),
		rebateQualifier: isly.string().optional(),
	})
	export const is = type.is
}
