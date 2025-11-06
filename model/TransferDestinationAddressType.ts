import { isly } from "isly"

export type TransferDestinationAddressType = typeof TransferDestinationAddressType.values[number]

export namespace TransferDestinationAddressType {
	export const values = ["SCAN", "IBAN", "ABA", "FUNDING_ACCOUNT"] as const

	export const type = isly.string<TransferDestinationAddressType>(values)
	export const is = type.is
}
