import { Currency, Date, DateTime } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardDeliveryResponse } from "./CardDeliveryResponse"
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
	export const type = isly.object<TransferResponseV2>({
		providerCode: ProviderCode.type,
		providerTransferId: isly.string(),
		amount: isly.number(),
		currency: isly.fromIs("Currency", Currency.is),
		status: TransferStatus.type,
		errorMessage: isly.string().optional(),
		createdDate: isly.fromIs("Date", Date.is),
		paymentDate: isly.fromIs("Date", Date.is).optional(),
		reference: isly.string(),
		source: isly.union(FundingAccountSummaryResponse.type, ExternalSource.type),
		destination: TransferDestinationResponse.type,
		bookingInfo: MetadataResponse.type.optional(),
		direction: TransferDirection.type,
		createdBy: isly.string(),
		personallyApprovable: isly.boolean().optional(),
		approvedBy: isly.string().optional(),
		approvedOn: isly.fromIs("DateTime", DateTime.is).optional(),
	})

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
			TransferDirection.is(value.direction) &&
			typeof value.createdBy == "string" &&
			(value.personallyApprovable == undefined || typeof value.personallyApprovable == "boolean") &&
			(value.approvedBy == undefined || typeof value.approvedBy == "string") &&
			(value.approvedOn == undefined || DateTime.is(value.approvedOn))
		)
	}
}
