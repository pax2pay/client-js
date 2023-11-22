import { SuggestionRequest } from "./SuggestionRequest"
describe("", () => {
	it("", () => {
		expect(
			SuggestionRequest.is({
				merchant: {
					id: "M000001",
					name: "Ryanair",
					mcc: "4511",
					type: "flight",
				},
				amount: 5,
				currency: "EUR",
			})
		).toBeTruthy()
	})
})
