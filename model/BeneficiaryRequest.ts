import { isly } from "isly"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationInfo
	defaultReference?: string
	name?: string
}
export namespace BeneficiaryRequest {
	export const type = isly.object<BeneficiaryRequest>({
		transferDestination: isly.fromIs("TransferDestinationInfo", TransferDestinationInfo.is),
		defaultReference: isly.string().optional(),
		name: isly.string().optional(),
	})
	export const is = type.is
}
