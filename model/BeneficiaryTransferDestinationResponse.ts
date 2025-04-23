import { isly } from "isly"
import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"
export interface BeneficiaryTransferDestinationResponse extends AccountDetailsTransferDestinationResponse {
	beneficiaryId: string
	name?: string
}

export namespace BeneficiaryTransferDestinationResponse {
	export const type = AccountDetailsTransferDestinationResponse.type.extend<BeneficiaryTransferDestinationResponse>({
		beneficiaryId: isly.string(),
		name: isly.string().optional(),
	})
	export const is = type.is
}
