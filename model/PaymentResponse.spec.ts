import { PaymentResponse } from "./PaymentResponse"

describe("PaymentResponse", () => {
	it("is false", () => {
		expect(PaymentResponse.is({ status: "INACTIVE", code: "somecode" })).toBeFalsy()
	})
	it("is true", () => {
		const res = {
			id: "Y000000DQ",
			account: "A00003O",
			amount: 1,
			remaining: 1,
			total: 301,
			schedule: [
				{
					amount: 200,
					date: "2024-12-10",
				},
				{
					amount: 100,
					date: "2024-12-16",
				},
			],
			currency: "GBP",
			state: "active",
			method: "card",
			meta: {
				type: "FIVE_FIELDS",
				trackingId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
				agentBookingReference: "test",
				departureDate: "2024-08-29",
				supplierBookingReference: "test",
				leadPassengerName: "test",
				supplierCode: "test",
			},
			createdBy: "qijiey",
			createdOn: "2024-09-23T09:29:25.506830301",
			delivery: {
				type: "email",
				to: "test@paxport.net",
				message: "test message",
				lapses: "2024-12-15",
				sent: "2024-09-23T09:29:25.306692",
				state: "pending",
			},
			card: {
				id: "C0000000000000",
				providerCode: "modulr",
				providerCardId: "V210017WUW",
				cardType: "P2P-140-Visa-Prepaid",
				pan: "0000000000000000",
				state: "active",
				expires: "2024-12",
				usage: "single",
				cvv: "057",
				cardHolderName: "test test",
				issued: "2024-09-23",
				remaining: 1,
				maxAmount: 301,
				activationDate: "2024-12-12",
			},
		}
		expect(PaymentResponse.is(res)).toBeTruthy()
	})
})
