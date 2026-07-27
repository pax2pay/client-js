import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"

export interface RebateRecipientConfiguration {
	enabled: boolean
	address: AddressInfo
	qualifiedAddresses: Record<string, AddressInfo>
	qualifiers: string[]
}

export namespace RebateRecipientConfiguration {
	export const type = isly.object<RebateRecipientConfiguration>({
		enabled: isly.boolean(),
		address: AddressInfo.type,
		qualifiedAddresses: isly.record(isly.string(), AddressInfo.type),
		qualifiers: isly.string().array(),
	})
	export const is = type.is
}
