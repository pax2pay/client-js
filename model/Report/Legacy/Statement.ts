import * as isoly from "isoly"
import { StatementItem } from "../StatementItem"

export interface Statement {
	accountIdentifier: string
	from: isoly.Date
	to: isoly.Date
	openingBalance: number
	closingBalance: number
	statements: StatementItem[]
}
