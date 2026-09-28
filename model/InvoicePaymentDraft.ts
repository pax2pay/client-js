import { Currency } from "isoly"
import { isly } from "isly"

/**
 * What POST /payments/invoice hands back: a payment request to fill in and POST to /payments.
 * Only the values the invoice reader is confident about are prefilled.
 */
export interface InvoicePaymentDraft {
	document: string
	amount?: number
	currency?: Currency
	_extraction?: InvoicePaymentDraft.Extraction
}
export namespace InvoicePaymentDraft {
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
	/** How sure the reader is of each value (0 to 1), and which are worth a second look. */
	export interface Extraction {
		confidence: Partial<Record<Category, number>>
		flagged: Category[]
	}
	export const type = isly.object<InvoicePaymentDraft>({
		document: isly.string(),
		amount: isly.number().optional(),
		currency: isly.fromIs("Currency", Currency.is).optional(),
		_extraction: isly
			.object<Extraction>({
				confidence: isly.record(isly.string(categories), isly.number()),
				flagged: isly.array(isly.string(categories)),
			})
			.optional(),
	})
	export const is = type.is
}
