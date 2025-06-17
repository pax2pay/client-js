import { isly } from "isly"
import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
import { ProviderCode } from "./ProviderCode"

export interface TransferResponseV3 {
	beneficiary?: string
	reference: string
	providerTransferId: string
	providerCode: ProviderCode
	destination: AccountDetailsTransferDestinationResponse // Actually a TransferDestinationResponse, we only need this in UI
}
export namespace TransferResponseV3 {
	export const type = isly.object<TransferResponseV3>({
		beneficiary: isly.string().optional(),
		reference: isly.string(),
		providerTransferId: isly.string(),
		providerCode: ProviderCode.type,
		destination: AccountDetailsTransferDestinationResponse.type,
	})
	export const is = type.is
}
