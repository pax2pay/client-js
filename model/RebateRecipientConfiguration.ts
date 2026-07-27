import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"

export interface RebateRecipientConfiguration {
	enabled?: boolean
	address?: AddressInfo
	qualifiedAddresses?: Record<string, AddressInfo>
	qualifiers?: string[]
}

export namespace RebateRecipientConfiguration {
	export const type = isly.object<RebateRecipientConfiguration>({
		enabled: isly.boolean().optional(),
		address: AddressInfo.type.optional(),
		qualifiedAddresses: isly.record<Record<string, AddressInfo>>(isly.string(), AddressInfo.type).optional(),
		qualifiers: isly.string().array().optional(),
	})
	export const is = type.is
}
