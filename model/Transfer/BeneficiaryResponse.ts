import * as isoly from "isoly"
import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryResponse {
	transferDestination?: TransferDestinationInfo
	defaultReference?: string
	status?: BeneficiaryStatus
	name?: string
	fullName?: string
	beneficiaryId?: string
	createdOn?: isoly.DateTime
	history?: BeneficiaryResponse[]
}

export namespace BeneficiaryResponse {
	export function is(value: BeneficiaryResponse | any): value is BeneficiaryResponse {
		return (
			typeof value == "object" &&
			(value.transferDestination == undefined || TransferDestinationInfo.is(value.transferDestination)) &&
			(value.defaultReference == undefined || typeof value.defaultReference == "string") &&
			(value.status == undefined || BeneficiaryStatus.is(value.status)) &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.fullName == undefined || typeof value.fullName == "string") &&
			(value.beneficiaryId == undefined || typeof value.beneficiaryId == "string") &&
			(value.createdOn == undefined || isoly.DateTime.is(value.createdOn)) &&
			(value.history == undefined || Array.isArray(value.history)) //not checking same type because of risk of being slow
		)
	}
}
