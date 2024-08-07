import { Range } from "./Range"

describe("Range", () => {
	it("number", () => {
		expect(
			Range.Number.is({
				start: 1,
				end: 4,
			})
		).toBeTruthy()

		expect(
			Range.Number.is({
				start: 4,
				end: 1,
			})
		).toBeFalsy()
	})
})
