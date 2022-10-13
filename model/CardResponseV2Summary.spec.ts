import { CardResponseV2Summary } from "./CardResponseV2Summary"

describe("CardResponseV2Summary is", () => {
	it("should be true", async () => {
		const json = {
			cardNumber: "123412******1234",
			createdBy: "test",
		}
		expect(CardResponseV2Summary.is(json)).toBeTruthy()
	})

	it("should be false", async () => {
		const json = {
			createdBy: "test",
		}
		expect(CardResponseV2Summary.is(json)).toBeFalsy()
	})
})
