import { YearMonth } from "./YearMonth"

describe("ym", () => {
	it("is", () => {
		const t = ["1999-01", "1475-10", "2020-12"]
		const f = ["1999-01-02", "1475-00", "2020-13", "1234511"]

		expect(t.every(YearMonth.is)).toBeTruthy()
		expect(f.every(a => YearMonth.is(a) == false)).toBeTruthy()
	})
})
