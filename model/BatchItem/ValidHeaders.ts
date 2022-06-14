export namespace ValidHeaders {
	const start = ["reference", "type", "subtype", "recipient", "account", "currency", "meta"]
	const end = ["lapses", "message", "date", "amount"]
	export const fiveFields = [
		...start,
		"departureDate",
		"supplierCode",
		"supplierBookingReference",
		"leadPassengerName",
		"agentBookingReference",
		...end,
	]
	export const hotel = [
		...start,
		"checkInDate",
		"supplierCode",
		"supplierBookingReference",
		"primaryGuestName",
		"agentBookingReference",
		...end,
	]
	export const invoice = [...start, "invoiceDate", "supplierName", "supplierReferenceNumber", ...end]
	export const allValid = [fiveFields, hotel, invoice]
}
