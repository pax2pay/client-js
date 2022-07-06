import { BeneficiaryStatus } from "./BeneficiaryStatus"
import { TransferDestinationInfo } from "./TransferDestinationInfo"

export interface BeneficiaryRequest {
	transferDestination: TransferDestinationInfo
	defaultReference?: string
	status: BeneficiaryStatus
	name?: string
	fullName: string
}

export namespace BeneficiaryRequest {
	export function is(value: BeneficiaryRequest | any): value is BeneficiaryRequest {
		return (
			typeof value == "object" &&
			TransferDestinationInfo.is(value.transferDestination) &&
			(value.defaultReference == undefined || typeof value.defaultReference == "string") &&
			BeneficiaryStatus.is(value.status) &&
			(value.name == undefined || typeof value.name == "string") &&
			typeof value.fullName == "string"
		)
	}
}
