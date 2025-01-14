import * as isoly from "isoly"
import { isly } from "isly"
import { ProviderCode } from "../ProviderCode"
import { Status } from "./Status"

export interface Search {
	fuzzySearch?: string
	status?: Status[]
	createdBy?: string[]
	personallyApprovable?: boolean
	paymentId?: string[]
	cardId?: string[]
	merchantId?: string[]
	providerCode?: ProviderCode[]
	currency?: isoly.Currency[]
	includeCount?: boolean
	onlyCount?: boolean
}
export namespace Search {
	export const type = isly.object<Search>({
		fuzzySearch: isly.string().optional(),
		status: Status.type.array().optional(),
		createdBy: isly.string().array().optional(),
		personallyApprovable: isly.boolean().optional(),
		paymentId: isly.string().array().optional(),
		cardId: isly.string().array().optional(),
		merchantId: isly.string().array().optional(),
		providerCode: ProviderCode.type.array().optional(),
		currency: isly.array(isly.fromIs("Currency", isoly.Currency.is)).optional(),
		includeCount: isly.boolean().optional(),
		onlyCount: isly.boolean().optional(),
	})
	export const is = type.is
}
