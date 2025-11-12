import { isly } from "isly"

export type DestinationType = typeof DestinationType.values[number]

export namespace DestinationType {
	export const values = ["DOWNLOAD", "EMAIL", "SFTP"] as const
	export const type = isly.string<DestinationType>(values)
	export const is = type.is
}
