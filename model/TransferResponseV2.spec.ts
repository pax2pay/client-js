import { TransferResponseV2 } from "./TransferResponseV2"
describe("TransferResponseV2 is", () => {
	it("should be true", async () => {
		const json = {
			providerCode: "modulr",
			providerTransferId: "P12005RMB0",
			externalId: "EXT12345",
			amount: 1,
			amountReceived: 1,
			currency: "GBP",
			status: "SETTLED",
			createdDate: "2022-10-11",
			reference: "fdfg dafgdfg",
			source: {
				providerAccountId: "A120CX1Z",
				accountId: "testest",
				balance: 3861,
				friendlyName: "Flights GBP 2",
			},
			destination: {
				sortCode: "000000",
				accountNumber: "12341234",
				fullName: "TESTBCN",
				beneficiaryId: "B291",
			},
			direction: "OUT",
			createdBy: "lucym",
		}
		expect(TransferResponseV2.is(json)).toBeTruthy()
	})

	it("should be false", async () => {
		const json = {
			reference: "fdfg dafgdfg",
			createdBy: "lucym",
		}

		expect(TransferResponseV2.is(json)).toBeFalsy()
	})
})
