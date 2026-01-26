import { Currency, Date, DateTime } from "isoly"
import { isly } from "isly"
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
	externalId: string
	amount: number
	amountReceived?: number
	currency: Currency
	currencyReceived?: Currency
	status: TransferStatus
	errorMessage?: string
	createdDate: Date
	paymentDate?: Date
	reference: string
	source: FundingAccountSummaryResponse | ExternalSource
	destination: TransferDestinationResponse
	bookingInfo?: MetadataResponse
	direction?: TransferDirection
	createdBy: string
	personallyApprovable?: boolean
	approvedBy?: string
	approvedOn?: DateTime
}

export namespace TransferResponseV2 {
	export const type = isly.object<TransferResponseV2>({
		providerCode: ProviderCode.type,
		providerTransferId: isly.string(),
		externalId: isly.string(),
		amount: isly.number(),
		amountReceived: isly.number().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		currencyReceived: isly.fromIs("Currency", Currency.is).optional(),
		status: TransferStatus.type,
		errorMessage: isly.string().optional(),
		createdDate: isly.fromIs("Date", Date.is),
		paymentDate: isly.fromIs("Date", Date.is).optional(),
		reference: isly.string(),
		source: isly.union(
			isly.fromIs("FundingAccountSummaryResponse", FundingAccountSummaryResponse.is),
			isly.fromIs("ExternalSource", ExternalSource.is)
		),
		destination: isly.fromIs("TransferDestinationResponse", TransferDestinationResponse.is),
		bookingInfo: MetadataResponse.type.optional(),
		direction: isly.fromIs("TransferDirection", TransferDirection.is).optional(),
		createdBy: isly.string(),
		personallyApprovable: isly.boolean().optional(),
		approvedBy: isly.string().optional(),
		approvedOn: isly.fromIs("DateTime", DateTime.is).optional(),
	})
	export const is = type.is
}
