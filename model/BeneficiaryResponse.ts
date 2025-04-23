import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { ConfirmationOfPayeeResponse } from "./ConfirmationOfPayeeResponse"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryResponse {
	transferDestination: TransferDestinationInfo
	status: BeneficiaryStatus
	name: string
	beneficiaryId: string
	createdOn: string
	defaultReference?: string
	fullName?: string
	history?: BeneficiaryResponse[]
	confirmationOfPayee?: ConfirmationOfPayeeResponse
}

export namespace BeneficiaryResponse {
	export function is(value: BeneficiaryResponse | any): value is BeneficiaryResponse {
		return (
			typeof value == "object" &&
			TransferDestinationInfo.is(value.transferDestination) &&
			BeneficiaryStatus.is(value.status) &&
			typeof value.name == "string" &&
			typeof value.beneficiaryId == "string" &&
			typeof value.createdOn == "string" &&
			(value.fullName == undefined || typeof value.fullName == "string") &&
			(value.defaultReference == undefined || typeof value.defaultReference == "string") &&
			(value.history == undefined || Array.isArray(value.history)) && //not checking same type because of risk of being slow
			(value.confirmationOfPayee == undefined || ConfirmationOfPayeeResponse.is(value.confirmationOfPayee))
		)
	}
}
