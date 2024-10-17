import { CardSearch } from "./CardSearch"

export interface CardReportUrlRequest extends CardSearch {
	fileFormat: string
	locale?: string
}
