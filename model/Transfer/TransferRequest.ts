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

export namespace TransferRequest {
	export function is(value: TransferRequest | any): value is TransferRequest {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerSourceAccountId == "string" &&
			(value.beneficiaryId == undefined || typeof value.beneficiaryId == "string") &&
			(value.destination == undefined || NonBeneficiaryTransferDestination.is(value.destination)) &&
			(value.destinationProviderAccountId == undefined || typeof value.destinationProviderAccountId == "string") &&
			typeof value.amount == "number" &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.paymentDate == undefined || isoly.Date.is(value.paymentDate)) &&
			(value.bookingInfo == undefined || BookingInfoRequest.is(value.bookingInfo))
		)
	}
}
