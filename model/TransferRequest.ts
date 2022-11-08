import { BookingInfoRequest } from "./BookingInfoRequest"
import { NonBeneficiaryTransferDestination } from "./NonBeneficiaryTransferDestination"
import { ProviderCode } from "./ProviderCode"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: NonBeneficiaryTransferDestination
	destinationProviderAccountId?: string
	amount: number
	currency?: string
	reference?: string
	paymentDate?: string
	bookingInfo?: BookingInfoRequest
}
