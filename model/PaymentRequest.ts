import * as isoly from "isoly"
import { BookingInfoRequest } from "./BookingInfoRequest"
import { CardDeliveryRequest } from "./CardDeliveryRequest"
import { CardUsage } from "./CardUsage"
import { ProviderCode } from "./ProviderCode"
import { ScheduledTaskRequest } from "./ScheduledTaskRequest"
import { TransferDestinationInfo } from "./TransferDestinationInfo"
import { YearMonth } from "./YearMonth"

interface PaymentRequest {
	// the account to take the money from. PAID optional if account is otherwise unambiguous
	account: {
		providerCode: ProviderCode
		providerAccountId: string
	}
	// currency of the payment
	currency: isoly.Currency
	amount: number
	// list of item details, optional
	items: PaymentItem[]
	// booking info
	meta: BookingInfoRequest
	merchant: {
		// cant read what this says
	}
	// two different types - one for card, one for transfers
	payment: CardPayment | TransferPayment
}

// this ones for card
interface CardPayment {
	cardType: string
	expiryDate: YearMonth
	usage: CardUsage
	delivery: CardDeliveryRequest
	schedule: ScheduledTaskRequest[]
}

// this one for transfers
interface TransferPayment {
	destination: TransferDestinationInfo
	reference: string
	paymentDate: isoly.Date
}

interface PaymentItem {
	quantity: number
	reference: string
	description: string
	price: number
	currency: isoly.Currency
}
