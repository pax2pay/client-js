import { Currency, DateTime } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { PaymentAmountScheduleResponse } from "./PaymentAmountScheduleResponse"
import { PaymentStatus } from "./PaymentStatus"
import { SummaryMerchantResponse } from "./SummaryMerchantResponse"

export interface AbstractPaymentResponse {
	id: string
	account: string
	amount: number
	remaining: number
	total: number
	schedule?: PaymentAmountScheduleResponse[]
	currency: Currency
	state: PaymentStatus
	merchant?: SummaryMerchantResponse
	method: "card" | "transfer"
	meta?: BookingInfoResponse
	createdBy: string
	createdOn: DateTime
}
export namespace AbstractPaymentResponse {
	export const type = isly.object<AbstractPaymentResponse>({
		id: isly.string(),
		account: isly.string(),
		amount: isly.number(),
		remaining: isly.number(),
		total: isly.number(),
		schedule: PaymentAmountScheduleResponse.type.array().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		state: PaymentStatus.type,
		merchant: SummaryMerchantResponse.type.optional(),
		method: isly.string(["card", "transfer"]),
		meta: isly.fromIs("BookingInfoResponse", BookingInfoResponse.is).optional(),
		createdBy: isly.string(),
		createdOn: isly.string(),
	})
	export const is = type.is
}
