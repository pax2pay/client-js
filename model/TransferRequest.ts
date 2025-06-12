import { Currency, Date } from "isoly"
import { isly } from "isly"
import { MetadataRequest } from "./MetadataRequest"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: TransferDestinationRequest
	destinationProviderAccountId?: string
	destinationProviderCode?: ProviderCode
	providerBeneficiaryId?: string
	amount: number
	currency?: Currency
	reference?: string
	paymentDate?: Date
	metadata?: MetadataRequest
}

export namespace TransferRequest {
	export const type = isly.object<TransferRequest>({
		providerCode: ProviderCode.type,
		providerSourceAccountId: isly.string(),
		beneficiaryId: isly.string().optional(),
		destination: TransferDestinationRequest.type.optional(),
		destinationProviderAccountId: isly.string().optional(),
		destinationProviderCode: ProviderCode.type.optional(),
		providerBeneficiaryId: isly.string().optional(),
		amount: isly.number(),
		currency: isly.fromIs("Currency", Currency.is).optional(),
		reference: isly.string().optional(),
		paymentDate: isly.fromIs("Date", Date.is).optional(),
		metadata: MetadataRequest.type.optional(),
	})
}
