import { StatementRowIds } from "./StatementRowIds"

describe("StatementRowIds is", () => {
	it("should be true", async () => {
		const json = {
			rowId: "R000000000000424",
			providerCode: "modulr",
			providerTransferId: "P12005RMB0",
		}

		expect(StatementRowIds.is(json)).toBeTruthy()
	})

	it("should be false", async () => {
		const json = {
			rowId: "R000000000000424",
			providerTransferId: "P12005RMB0",
		}

		expect(StatementRowIds.is(json)).toBeFalsy()
	})
})
