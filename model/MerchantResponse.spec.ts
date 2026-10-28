import { MerchantResponse } from "./MerchantResponse"

describe("MerchantResponse", () => {
	it.each([
		[{}, false],
		[null, false],
		[{ status: "active" }, true],
		[{ status: "active", type: "hotel" }, true],
		[{ status: "active", type: "cruise" }, true],
		[{ status: "active", type: "travel agency" }, true],
		[{ status: "active", type: 1 }, false],
	])("is(%j) -> %s", (value, expected) => {
		expect(MerchantResponse.is(value)).toBe(expected)
	})
})
