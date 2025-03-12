import { AbstractPaymentOperation } from "./AbstractPaymentOperation"

describe("AbstractPaymentOperation is", () => {
	it("operation", () => {
		const json = {
			type: "transfer",
			timestamp: "2025-03-12T10:43:17.078077",
		}
		expect(AbstractPaymentOperation.is(json)).toBeTruthy()
	})
})
