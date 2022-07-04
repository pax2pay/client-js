import * as isoly from "isoly"

export interface CardOptionSearch {
	supplier?: string
	balance?: number
	currency: isoly.Currency
	fundCheck: boolean
}
