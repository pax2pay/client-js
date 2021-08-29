import * as isoly from "isoly"
/**
 * An item in the charge-back report
 */
export interface ChargeBackItem {
	fullRefunds: Refund[]
	partialRefunds: Refund[]
}

export interface Refund {
	bookingReference: string //not necessary? / change name?
	agentBookingReference: string //not necessary? / change name?
	supplierCode: string
	cardId: string
	leadPassengerName: string //not necessary?
	totalPassengers: number //not necessary?
	bookingDate: isoly.Date
	departureDate: isoly.Date
	departureAirport: string //not necessary?
	arrivalAirport: string //not necessary?
	outboundFlightNumbers: any[] //not necessary?
	homeboundFlightNumbers: any[] //not necessary?
	modularTransactionInfo: ModularTransactionInfo
	claimAmount: number
}

export interface ModularTransactionInfo {
	bookingReference: string
	settlementId: string
	cardId: string
	transactionAmount: number
	transactionCurrency: isoly.Currency
}
