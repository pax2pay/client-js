import { isly } from "isly"

export type DownloadFileFormat = (typeof DownloadFileFormat.values)[number]

export namespace DownloadFileFormat {
	export const values = ["CSV", "PDF", "HTML", "CAMT_053"] as const
	export const type = isly.string(values)
	export const is = type.is
}
