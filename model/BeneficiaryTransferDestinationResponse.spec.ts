import { BeneficiaryTransferDestinationResponse } from "./BeneficiaryTransferDestinationResponse"

describe("BeneficiaryTransferDestinationResponse is", () => {
	it("scan account", () => {
		const json = {
			sortCode: "000000",
			accountNumber: "12255555",
			fullName: "TESTBCN",
			beneficiaryId: "B291",
		}
		expect(BeneficiaryTransferDestinationResponse.is(json)).toBeTruthy()
	}),
		it("iban account", () => {
			const json = {
				iban: "IB1231238918923",
				bic: "12255555",
				fullName: "TESTBCN",
				beneficiaryId: "B291",
			}
			expect(BeneficiaryTransferDestinationResponse.is(json)).toBeTruthy()
		})
})
