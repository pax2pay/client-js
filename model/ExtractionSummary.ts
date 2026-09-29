import { isly } from "isly"

/**
 * What the invoice reader made of the document, sent as PaymentRequest._extraction on a draft from
 * Payments.draftFromInvoice. Read-only: the server ignores it if it is sent back on a payment.
 * Keyed by category name, e.g. AMOUNT, CURRENCY or SUPPLIER_REFERENCE.
 */
export interface ExtractionSummary {
	/** How sure the reader is of each value, between 0 and 1 */
	confidence: Record<string, number>
	/** The values worth a second look, most important first */
	flagged: string[]
}
export namespace ExtractionSummary {
	export const type = isly.object<ExtractionSummary>({
		confidence: isly.record(isly.string(), isly.number()),
		flagged: isly.array(isly.string()),
	})
	export const is = type.is
}
