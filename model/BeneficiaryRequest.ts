import { isly } from "isly"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationRequest
	defaultReference?: string
	name?: string
}
export namespace BeneficiaryRequest {
	export const type = isly.object<BeneficiaryRequest>({
		transferDestination: TransferDestinationRequest.type,
		defaultReference: isly.string().optional(),
		name: isly.string().optional(),
	})
	export const is = type.is
}
