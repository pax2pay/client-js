import { InvoicePaymentDraft } from "./InvoicePaymentDraft"

describe("InvoicePaymentDraft", () => {
	it("accepts a draft carrying only the document", () => {
		expect(InvoicePaymentDraft.is({ document: "D0000001" })).toBe(true)
	})
	it("accepts a prefilled draft with its extraction summary", () => {
		expect(
			InvoicePaymentDraft.is({
				document: "D0000001",
				amount: 120.5,
				currency: "EUR",
				_extraction: { confidence: { AMOUNT: 0.97, SUPPLIER_NAME: 0.6 }, flagged: ["SUPPLIER_NAME"] },
			})
		).toBe(true)
	})
	it("rejects a draft without a document", () => {
		expect(InvoicePaymentDraft.is({ amount: 120.5 })).toBe(false)
	})
	it("rejects an unknown flagged category", () => {
		expect(InvoicePaymentDraft.is({ document: "D0000001", _extraction: { confidence: {}, flagged: ["IBAN"] } })).toBe(
			false
		)
	})
})
