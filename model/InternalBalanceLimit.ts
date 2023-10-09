import { Currency } from "isoly"

export interface InternalBalanceLimit {
	currency: Currency
	lowerLimit: number
	emails: string[]
	empty: boolean
}
