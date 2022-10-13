import { AccountDetailsTransferDestinationResponse } from "./AccountDetailsTransferDestinationResponse"

describe("AccountDetailsTransferDestinationResponse is", () => {
	it("scan account", () => {
		const json = {
			sortCode: "000000",
			accountNumber: "12255555",
			fullName: "TESTBCN",
		}
		expect(AccountDetailsTransferDestinationResponse.is(json)).toBeTruthy()
	})
	it("iban account", () => {
		const json = {
			iban: "IB1231238918923",
			bic: "12255555",
			fullName: "TESTBCN",
		}
		expect(AccountDetailsTransferDestinationResponse.is(json)).toBeTruthy()
	})

	it("iban account, no bic", () => {
		const json = {
			iban: "IB1231238918923",
			fullName: "TESTBCN",
		}
		expect(AccountDetailsTransferDestinationResponse.is(json)).toBeTruthy()
	})
})
