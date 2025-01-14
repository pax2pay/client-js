import { Currency } from "isoly"
import { isly } from "isly"
import { BookingInfoRequest } from "../BookingInfoRequest"
import { AmountScheduleRequest } from "./AmountScheduleRequest"
import { AmountScheduleResponse } from "./AmountScheduleResponse"
import { CreateRequest } from "./CreateRequest"
import { DeliveryRequest } from "./DeliveryRequest"
import { MerchantRequest } from "./MerchantRequest"

export interface Request {
	account: string
	amount?: number
	currency: Currency
	method?: "card" | "transfer"
	merchant?: MerchantRequest
	meta?: BookingInfoRequest
	card?: CreateRequest.Card
	transfer?: CreateRequest.Transfer
	delivery?: DeliveryRequest
	schedule?: AmountScheduleResponse[]
}
export namespace Request {
	export const type = isly.object<Request>({
		account: isly.string(),
		amount: isly.number().optional(),
		currency: isly.fromIs("Currency", Currency.is),
		method: isly.string(["card", "transfer"]).optional(),
		merchant: MerchantRequest.type.optional(),
		meta: isly.fromIs("BookingInfoRequest", BookingInfoRequest.is).optional(),
		card: CreateRequest.Card.type.optional(),
		transfer: CreateRequest.Transfer.type.optional(),
		delivery: DeliveryRequest.type.optional(),
		schedule: isly.array(AmountScheduleRequest.type).optional(),
	})
	export const is = type.is
}
