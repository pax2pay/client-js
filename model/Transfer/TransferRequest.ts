import * as isoly from "isoly"
import { BookingInfoRequest } from "../Meta/BookingInfoRequest"
import { ProviderCode } from "../Provider/ProviderCode"
import { NonBeneficiaryTransferDestination } from "./NonBeneficiaryTransferDestination"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: NonBeneficiaryTransferDestination
	destinationProviderAccountId?: string
	amount: number
	currency?: isoly.Currency
	reference?: string
	paymentDate?: isoly.Date
	bookingInfo?: BookingInfoRequest
}
