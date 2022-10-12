import { Currency } from "isoly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { FundingAccountResponseV2 } from "./FundingAccountResponseV2"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationInfo } from "./TransferDestinationInfo"
import { TransferStatus } from "./TransferStatus"

export interface TransferResponse {
	providerCode: ProviderCode
	providerTransferId: string
	amount: number
	currency: Currency
	status: TransferStatus
	createdDate: string
	paymentDate?: string
	reference: string
	source?: FundingAccountResponseV2
	destination?: TransferDestinationInfo
	errorMessage?: string
	bookingInfo?: BookingInfoResponse
	createdBy: string
}

export namespace TransferResponse {
	export function is(value: TransferResponse | any): value is TransferResponse {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerTransferId == "string" &&
			typeof value.amount == "number" &&
			Currency.is(value.currency) &&
			TransferStatus.is(value.status) &&
			typeof value.createdDate == "string" &&
			(value.paymentDate == undefined || typeof value.paymentDate == "string") &&
			typeof value.reference == "string" &&
			(value.source == undefined || value.source == FundingAccountResponseV2.is(value.source)) &&
			(value.destination == undefined || TransferDestinationInfo.is(value.destination)) &&
			(value.errorMessage == undefined || typeof value.errorMessage == "string") &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo)) &&
			(value.createdBy == undefined || typeof value.createdBy == "string")
		)
	}
}
