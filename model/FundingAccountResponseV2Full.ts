import { DateTime } from "isoly"
import { AccountIdentifierResponse } from "./AccountIdentifierResponse"
import { FundingAccountResponseV2Basic } from "./FundingAccountResponseV2Basic"
import { FundingLimitResponse } from "./FundingLimitResponse"

export interface FundingAccountResponseV2Full extends FundingAccountResponseV2Basic {
	actualBalance?: number
	fundingLimit?: FundingLimitResponse
	accountIdentifier?: AccountIdentifierResponse
	totalCardAvailableBalance: number
	updatedOn: DateTime
	createdOn: DateTime
	realm?: string
}

export namespace FundingAccountResponseV2Full {
	export function is(value: FundingAccountResponseV2Full | any): value is FundingAccountResponseV2Full {
		return (
			typeof value == "object" &&
			(value.actualBalance == undefined || typeof value.actualBalance == "number") &&
			(value.realm == undefined || typeof value.realm == "string") &&
			(value.fundingLimit == undefined || FundingLimitResponse.is(value.fundingLimit)) &&
			(value.accountIdentifier == undefined || AccountIdentifierResponse.is(value.accountIdentifier)) &&
			typeof value.totalCardAvailableBalance == "number" &&
			DateTime.is(value.updatedOn) &&
			DateTime.is(value.createdOn) &&
			FundingAccountResponseV2Basic.is(value)
		)
	}
}
