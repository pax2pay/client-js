import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationResponse } from "./TransferDestinationResponse"

export interface TransferResponseV3 {
	beneficiary?: string
	reference: string
	providerTransferId: string
	providerCode: ProviderCode
	destination: TransferDestinationResponse
}
export namespace TransferResponseV3 {
	export const type = isly.object<TransferResponseV3>({
		beneficiary: isly.string().optional(),
		reference: isly.string(),
		providerTransferId: isly.string(),
		providerCode: ProviderCode.type,
		destination: isly.fromIs("TransferDestinationResponse", TransferDestinationResponse.is),
	})
	export const is = type.is
}
