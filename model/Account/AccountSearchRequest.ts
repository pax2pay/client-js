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

export namespace AccountSearchRequest {
	export function is(value: AccountSearchRequest | any): value is AccountSearchRequest {
		return (
			typeof value == "object" &&
			(value.friendlyName == undefined || typeof value.friendlyName == "string") &&
			(value.providerCodes == undefined ||
				(Array.isArray(value.providerCodes) && value.providerCodes.every((item: any) => ProviderCode.is(item)))) &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.accountState == undefined || AccountState.is(value.accountState)) &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string")
		)
	}
}
