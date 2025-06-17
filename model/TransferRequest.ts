import { BookingInfoRequest } from "./BookingInfoRequest"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationRequest } from "./TransferDestinationRequest"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: TransferDestinationRequest
	destinationProviderAccountId?: string
	destinationProviderCode?: ProviderCode
	amount: number
	currency?: string
	reference?: string
	paymentDate?: string
	bookingInfo?: BookingInfoRequest
}
