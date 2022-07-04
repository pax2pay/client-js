import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { AccountState } from "./AccountState"

/**
 * Search request for card types.
 */
export interface FundingAccountSearchRequest {
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: isoly.Currency
	accountState?: AccountState
	providerAccountId?: string
}
