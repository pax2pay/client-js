import { Currency, DateTime } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "../BookingInfoResponse"
import { SummaryMerchantResponse } from "../SummaryMerchantResponse"
import { AmountScheduleResponse } from "./AmountScheduleResponse"
import { Status } from "./Status"

export interface AbstractResponse {
	id: string
	account: string
	amount: number
	remaining: number
	total: number
	schedule?: AmountScheduleResponse[]
	currency: Currency
	state: Status
	merchant?: SummaryMerchantResponse
	method: "card" | "transfer"
	meta?: BookingInfoResponse
	createdBy: string
	createdOn: DateTime
}
export namespace AbstractResponse {
	export const type = isly.object<AbstractResponse>({
		id: isly.string(),
		account: isly.string(),
		amount: isly.number(),
		remaining: isly.number(),
		total: isly.number(),
		schedule: AmountScheduleResponse.type.array().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		state: Status.type,
		merchant: SummaryMerchantResponse.type.optional(),
		method: isly.string(["card", "transfer"]),
		meta: isly.fromIs("BookingInfoResponse", BookingInfoResponse.is).optional(),
		createdBy: isly.string(),
		createdOn: isly.string(),
	})
	export const is = type.is
}
