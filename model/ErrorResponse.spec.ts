import { ErrorResponse } from "./ErrorResponse"
describe("ErrorResponse", () => {
	it("is 503", async () => {
		expect(ErrorResponse.is({ code: 503, errors: [{ message: "Service unavailable" }] })).toBeTruthy()
	})
})
