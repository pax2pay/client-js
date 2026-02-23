import { isly } from "isly"
import { BeneficiarySubType } from "./BeneficiarySubType"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationRequest
	defaultReference?: string
	name?: string
	subtype?: BeneficiarySubType
	rebateQualifier?: string
}
export namespace BeneficiaryRequest {
	export const type = isly.object<BeneficiaryRequest>({
		transferDestination: TransferDestinationRequest.type,
		defaultReference: isly.string().optional(),
		name: isly.string().optional(),
		subtype: isly.fromIs("BeneficiarySubType", BeneficiarySubType.is).optional(),
		rebateQualifier: isly.string().optional(),
	})
	export const is = type.is
}
