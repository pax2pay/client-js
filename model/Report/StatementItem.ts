import * as isoly from "isoly"
import { StatementType } from "./StatementType"
import { Status } from "./Status"

export interface StatementItem {
	transactionType: StatementType
	transactionStatus: Status
	timestamp: isoly.Date
	currency: isoly.Currency
	amount: number
	affectsAccountBalance: boolean
	accountBalance: number
	bookingDetails: { merchantName: string }
	cardId: string
	unused: boolean
	pending: boolean
	settlementTimestamp?: isoly.Date
}
