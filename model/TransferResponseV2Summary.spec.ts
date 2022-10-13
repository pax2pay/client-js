import { TransferResponseV2Summary } from "./TransferResponseV2Summary"
describe("TransferResponseV2Summary is", () => {
	it("should be true", async () => {
		const json = {
			reference: "fdfg dafgdfg",
			createdBy: "lucym",
		}
		expect(TransferResponseV2Summary.is(json)).toBeTruthy()
	})

	it("should be false", async () => {
		const json = {
			createdBy: "lucym",
		}

		expect(TransferResponseV2Summary.is(json)).toBeFalsy()
	})
})
