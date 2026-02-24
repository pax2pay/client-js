import { isly } from "isly"
import { AddressInfo } from "./AddressInfo"

export interface QualifiedAddress extends AddressInfo {
	qualifier?: string
}

export namespace QualifiedAddress {
	export const type = AddressInfo.type.extend<QualifiedAddress>({
		qualifier: isly.string().optional(),
	})
	export const is = type.is
}
