import * as isoly from "isoly"
import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { TransferDestinationInfo } from "./TransferDestinationInfo"
import { YearMonth } from "./YearMonth"

interface PaymentRequest {
	account: {
		provider: ProviderCode
		id: string
	}
	currency: isoly.Currency
	amount?: number
	schedule?: Schedule
	meta: BookingInfoRequest
	supplier: {
		name?: string
	}
	paymentMethod: CardPayment | TransferPayment
}

interface CardPayment {
	cardType: string
	expiryDate: YearMonth
	usage: CardUsage
	delivery: CardDeliveryRequest
	schedule: ScheduledTaskRequest[]
}

interface TransferPayment {
	destination: TransferDestinationInfo
	reference: string
	paymentDate: isoly.Date
}

/* interface PaymentItem {
	quantity: number
	reference: string
	description: string
	price: number
	currency: isoly.Currency
} */

type Schedule = isoly.Date | ScheduleItem[]

interface ScheduleItem {
	date: isoly.Date
	amount: number
}
