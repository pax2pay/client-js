import { isly } from "isly"

/**
 * What the invoice reader made of the document, sent as PaymentRequest._extraction on a draft from
 * Payments.draftFromInvoice. Read-only: the server ignores it if it is sent back on a payment.
 */
export interface ExtractionSummary {
	/** How sure the reader is of each value, between 0 and 1 */
	confidence: Partial<Record<ExtractionSummary.Category, number>>
	/** The values worth a second look, most important first */
	flagged: ExtractionSummary.Category[]
}
export namespace ExtractionSummary {
	export const categories = [
		"AMOUNT",
		"CURRENCY",
		"SUPPLIER_REFERENCE",
		"AGENT_REFERENCE",
		"SUPPLIER_NAME",
		"INVOICE_NUMBER",
		"CUSTOMER_NAME",
		"INVOICE_DATE",
		"TAX_AMOUNT",
	] as const
	export type Category = (typeof categories)[number]
	export const type = isly.object<ExtractionSummary>({
		confidence: isly.record(isly.string(categories), isly.number()),
		flagged: isly.array(isly.string(categories)),
	})
	export const is = type.is
}
