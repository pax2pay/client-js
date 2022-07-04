import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { AccountState } from "./AccountState"

export interface AccountSearchRequest {
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: isoly.Currency
	accountState?: AccountState
	providerAccountId?: string
}
