import { AccountStatementResponseItem } from "./AccountStatementResponseItem"

export interface AccountStatementResponse {
	openingAvailableBalance: number
	closingAvailableBalance: number
	openingActualBalance: number
	closingActualBalance: number
	statements: AccountStatementResponseItem[]
}
