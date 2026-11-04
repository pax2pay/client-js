import { isly } from "isly"

export type ValueCategory = (typeof ValueCategory.values)[number]

export namespace ValueCategory {
	export const values = [
		"supplier reference",
		"agent reference",
		"customer name",
		"supplier name",
		"invoice number",
		"invoice date",
		"tax amount",
		"adults count",
		"children count",
		"infants count",
		"passengers count",
		"guests",
		"service start date",
		"service end date",
		"nights",
		"stay period",
		"payment amount",
		"payment currency",
		"document kind",
		"service type",
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
