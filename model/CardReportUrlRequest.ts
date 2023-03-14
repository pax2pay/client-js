import { CardSearchRequest } from "./CardSearchRequest"

export interface CardReportUrlRequest extends CardSearchRequest {
	fileFormat: string
	locale?: string
}
