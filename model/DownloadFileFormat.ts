import { isly } from "isly"

export type DownloadFileFormat = typeof DownloadFileFormat.values[number]

export namespace DownloadFileFormat {
	export const values = ["CSV", "PDF", "HTML"] as const
	export const type = isly.string(values)
	export const is = type.is
}
