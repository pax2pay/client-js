import * as isoly from "isoly"
import { AccountResponse } from "../Account/AccountResponse"
import { ProviderCode } from "../Provider/ProviderCode"
import { BeneficiaryResponse } from "./BeneficiaryResponse"
import { TransferDestinationInfo } from "./TransferDestinationInfo"
import { TransferStatus } from "./TransferStatus"

export interface TransferResponse {
	sourceAccount?: AccountResponse
	beneficiary?: BeneficiaryResponse
	destinationAccount?: AccountResponse
	destination?: TransferDestinationInfo
	amount?: number
	status?: TransferStatus
	createdDate?: isoly.DateTime
	paymentDate?: isoly.Date
	reference?: string
	providerCode?: ProviderCode
	providerTransferId?: string
	scheduled?: boolean
	errorDescription?: string
}

export namespace TransferResponse {
	export function is(value: TransferResponse | any): value is TransferResponse {
		return (
			typeof value == "object" &&
			(value.sourceAccount == undefined || AccountResponse.is(value.sourceAccount)) &&
			(value.beneficiary == undefined || BeneficiaryResponse.is(value.beneficiary)) &&
			(value.destinationAccount == undefined || AccountResponse.is(value.destinationAccount)) &&
			(value.destination == undefined || TransferDestinationInfo.is(value.destination)) &&
			(value.amount == undefined || typeof value.amount == "number") &&
			(value.status == undefined || TransferStatus.is(value.status)) &&
			(value.createdDate == undefined || isoly.DateTime.is(value.createdDate)) &&
			(value.paymentDate == undefined || isoly.Date.is(value.paymentDate)) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.providerTransferId == undefined || typeof value.providerTransferId == "string") &&
			(value.scheduled == undefined || typeof value.scheduled == "boolean") &&
			(value.errorDescription == undefined || typeof value.errorDescription == "string")
		)
	}
}
