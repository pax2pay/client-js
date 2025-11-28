import { Currency } from "isoly"
import { isly } from "isly"
import { ProviderCode } from "../../ProviderCode"
import { TransferDestinationResponse } from "../../TransferDestinationResponse"

// RebateBatchTaskResponse in mpay-server
export interface RebateTask {
	organisationCode: string
	organisationName: string
	reference: string
	amount: number
	currency: Currency
	sourceProviderCode: ProviderCode
	sourceProviderAccountId: string
	destination: TransferDestinationResponse
}

export namespace RebateTask {
	export const type = isly.object<RebateTask>({
		organisationCode: isly.string(),
		organisationName: isly.string(),
		reference: isly.string(),
		amount: isly.number(),
		currency: isly.string(),
		sourceProviderCode: ProviderCode.type,
		sourceProviderAccountId: isly.string(),
		destination: isly.fromIs("TransferDestinationResponse", TransferDestinationResponse.is),
	})
}
