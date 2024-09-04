import { Currency, DateTime } from "isoly"
import { BookingInfoResponse } from "./BookingInfoResponse"
import { CardResponseV2 } from "./CardResponseV2"
import { MerchantResponse } from "./MerchantResponse"
import { TransferResponseV3 } from "./TransferResponseV3"

export interface PaymentResponse {
	id: string
	account: string
	merchant?: MerchantResponse
	amount: number
	currency: Currency
	method: "card" | "transfer"
	meta?: BookingInfoResponse
	createdBy: string
	createdOn: DateTime
	card?: CardResponseV2
	transfer?: TransferResponseV3
}
