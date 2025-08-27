import { MetadataRequest } from "./MetadataRequest"
import { PaymentDeliveryRequest } from "./PaymentDeliveryRequest"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: TransferDestinationRequest
	destinationProviderCode?: ProviderCode
	destinationProviderAccountId?: string
	amount: number
	currency?: string
	reference?: string
	paymentDate?: string
	metadata?: MetadataRequest
	delivery?: PaymentDeliveryRequest
	batchId?: string
	verificationOfPayeeId?: string
}
