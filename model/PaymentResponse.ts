import { Currency, DateTime } from "isoly"
import { isly } from "isly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardResponseV2 } from "./CardResponseV2"
import { MerchantResponse } from "./MerchantResponse"
import { PaymentAmountScheduleResponse } from "./PaymentAmountScheduleResponse"
import { PaymentDeliveryResponse } from "./PaymentDeliveryResponse"
import { TransferResponseV3 } from "./TransferResponseV3"

export interface PaymentResponse {
	id: string
	merchant?: MerchantResponse
	account: string
	amount: number
	currency: Currency
	method: "card" | "transfer"
	meta?: BookingInfoResponse
	createdBy: string
	createdOn: DateTime
	card?: CardResponseV2
	transfer?: TransferResponseV3
	delivery?: PaymentDeliveryResponse
	schedule?: PaymentAmountScheduleResponse[]
}
export namespace PaymentResponse {
	export const type = isly.object<PaymentResponse>({
		id: isly.string(),
		merchant: isly.fromIs("MerchantResponse", MerchantResponse.is).optional(),
		account: isly.string(),
		amount: isly.number(),
		currency: isly.fromIs("Currency", Currency.is),
		method: isly.string(["card", "transfer"]),
		meta: isly.fromIs("BookingInfoResponse", BookingInfoResponse.is).optional(),
		createdBy: isly.string(),
		createdOn: isly.string(),
		card: isly.fromIs("CardResponseV2", CardResponseV2.is).optional(),
		transfer: isly.fromIs("TransferResponseV3", TransferResponseV3.is).optional(),
		delivery: isly.fromIs("PaymentDeliveryResponse", PaymentDeliveryResponse.is).optional(),
		schedule: isly.array(isly.fromIs("PaymentAmountScheduleResponse", PaymentAmountScheduleResponse.is)).optional(),
	})
	export const is = type.is
}
