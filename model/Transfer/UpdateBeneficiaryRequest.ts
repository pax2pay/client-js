import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface UpdateBeneficiaryRequest {
	transferDestination?: TransferDestinationInfo
	defaultReference?: string
	status?: BeneficiaryStatus
	name?: string
	fullName?: string
}

export namespace UpdateBeneficiaryRequest {
	export function is(value: UpdateBeneficiaryRequest | any): value is UpdateBeneficiaryRequest {
		return (
			typeof value == "object" &&
			(value.transferDestination == undefined || TransferDestinationInfo.is(value.transferDestination)) &&
			(value.defaultReference == undefined || typeof value.defaultReference == "string") &&
			(value.status == undefined || BeneficiaryStatus.is(value.status)) &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.fullName == undefined || typeof value.fullName == "string")
		)
	}
}
