import { Currency, Date, DateTime } from "isoly"
import { ExternalSource } from "./ExternalSource"
import { FundingAccountSummaryResponse } from "./FundingAccountSummaryResponse"
import { MetadataResponse } from "./MetadataResponse"
import { ProviderCode } from "./ProviderCode"
import { TransferDestinationResponse } from "./TransferDestinationResponse"
import { TransferDirection } from "./TransferDirection"
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
	bookingInfo?: MetadataResponse
	direction: TransferDirection
	createdBy: string
	personallyApprovable?: boolean
	approvedBy?: string
	approvedOn?: DateTime
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
			(value.bookingInfo == undefined || MetadataResponse.is(value.bookingInfo)) &&
			TransferDirection.is(value.direction) &&
			typeof value.createdBy == "string" &&
			(value.personallyApprovable == undefined || typeof value.personallyApprovable == "boolean") &&
			(value.approvedBy == undefined || typeof value.approvedBy == "string") &&
			(value.approvedOn == undefined || DateTime.is(value.approvedOn))
		)
	}
}
