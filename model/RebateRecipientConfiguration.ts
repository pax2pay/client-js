import { isly } from "isly"
import {Address} from "./Address"

export interface RebateRecipientConfiguration {
	enabled:boolean
	address: Address
	qualifiedAddresses:Record<string, Address>
	qualifiers:string[]
}

export namespace RebateRecipientConfiguration {
	export const type = isly.object<RebateRecipientConfiguration>({
		enabled: isly.boolean(),
		address: Address.type,
		qualifiedAddresses: isly.record(isly.string(), Address.type),
		qualifiers: isly.string().array(),
	})
	export const is = type.is
}
