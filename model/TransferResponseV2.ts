import { Currency, Date } from "isoly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { ExternalSource } from "./ExternalSource"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationResponse } from "./TransferDestinationResponse"
import { TransferStatus } from "./TransferStatus"

export interface TransferResponseV2 {
	providerCode: ProviderCode
	providerTransferId: string
	amount: number
	currency: Currency
	status: TransferStatus
	errorMessage?: string
	createdDate: Date
	paymentDate?: Date
	reference: string
	source: FundingAccountSummaryResponse | ExternalSource
	destination: TransferDestinationResponse
	bookingInfo?: BookingInfoResponse
	createdBy: string
}

export namespace TransferResponseV2 {
	export function is(value: TransferResponseV2 | any): value is TransferResponseV2 {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			typeof value.providerTransferId == "string" &&
			typeof value.amount == "number" &&
			Currency.is(value.currency) &&
			TransferStatus.is(value.status) &&
			(value.errorMessage == undefined || typeof value.errorMessage == "string") &&
			Date.is(value.createdDate) &&
			(value.paymentDate == undefined || Date.is(value.paymentDate)) &&
			typeof value.reference == "string" &&
			FundingAccountSummaryResponse.is(value.source) &&
			TransferDestinationResponse.is(value.destination) &&
			(value.bookingInfo == undefined || BookingInfoResponse.is(value.bookingInfo)) &&
			typeof value.createdBy == "string"
		)
	}
}
