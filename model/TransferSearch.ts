import * as isoly from "isoly"
import { isly } from "isly"
import { ProviderCode } from "./ProviderCode"
import { Range } from "./Range"
import { TransferStatus } from "./TransferStatus"

export interface TransferSearch {
	status?: TransferStatus[]
	providerCodes?: ProviderCode[]
	personallyApprovable?: boolean
	searchString?: string
	paymentDates?: Range<isoly.Date>
	destinationProviderAccountId?: string
	sourceProviderAccountId?: string
}

export namespace TransferSearch {
	export const type = isly.object<TransferSearch>({
		status: isly.array(isly.fromIs("TransferStatus", TransferStatus.is)).optional(),
		providerCodes: isly.array(isly.fromIs("ProviderCode", ProviderCode.is)).optional(),
		personallyApprovable: isly.boolean().optional(),
		searchString: isly.string().optional(),
		paymentDates: isly.fromIs("Range", Range.is).optional(),
		destinationProviderAccountId: isly.string().optional(),
		sourceProviderAccountId: isly.string().optional(),
	})
	export const is = type.is
}
