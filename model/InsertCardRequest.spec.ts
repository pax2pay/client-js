import { InsertCardRequest } from "./InsertCardRequest"

describe("InsertCardRequest", () => {
	it.each([
		[{ providerCode: "modulr", cardType: "MASTERCARD" }, true],
		[{ providerCode: "modulr", cardType: "MASTERCARD", usage: "SINGLE_USE" }, true],
		[{ providerCode: "modulr", cardType: "MASTERCARD", usage: "MULTIPLE_USE" }, true],
		[{ providerCode: "modulr", cardType: "MASTERCARD", usage: "multiple" }, false],
	])("is(%j) -> %s", (value, expected) => {
		expect(InsertCardRequest.is(value)).toBe(expected)
	})
})
