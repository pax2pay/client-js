import { CardResponseV2 } from "./CardResponseV2"

describe("", () => {
	it("", () => {
		const card1 = {
			cardType: "VISA",
			cardNumber: "4871860070839043",
			cvv: "975",
			expiryDate: "2022-11",
			nameOnCard: "test test",
			balance: 1,
			issueDate: "2022-03-22",
			providerCode: "modulr",
			providerCardId: "V12000PUJS",
			usage: "SINGLE_USE",
			fundingAccount: {
				providerAccountId: "A120ABTA",
				balance: 35904.51,
			},
			schedule: [
				{
					dueOn: "2022-10-10T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000PUJS-1",
					desiredState: "THAW",
				},
				{
					dueOn: "2022-10-10T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000PUJS-2",
					newBalance: 10,
				},
			],
			createdBy: "lucym",
		}

		const card2 = {
			cardType: "VISA",
			cardNumber: "4871860077705999",
			cvv: "378",
			expiryDate: "2022-11",
			nameOnCard: "test test",
			balance: 1,
			issueDate: "2022-03-22",
			providerCode: "modulr",
			providerCardId: "V12000PUJW",
			usage: "SINGLE_USE",
			fundingAccount: {
				providerAccountId: "A120ABTA",
				balance: 35904.51,
			},
			schedule: [
				{
					dueOn: "2022-08-25T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000PUJW-1",
					desiredState: "THAW",
				},
				{
					dueOn: "2022-08-25T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000PUJW-5",
					newBalance: 2,
				},
				{
					dueOn: "2022-09-09T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000PUJW-2",
					desiredState: "THAW",
				},
				{
					dueOn: "2022-09-09T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000PUJW-6",
					remainingBalance: 1,
				},
				{
					dueOn: "2022-10-29T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000PUJW-3",
					desiredState: "THAW",
				},
				{
					dueOn: "2022-10-29T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000PUJW-7",
					remainingBalance: 3,
				},
				{
					dueOn: "2022-10-30T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000PUJW-4",
					desiredState: "THAW",
				},
				{
					dueOn: "2022-10-30T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000PUJW-8",
					remainingBalance: 1,
				},
			],
			createdBy: "lucym",
		}

		expect(CardResponseV2.is(card1)).toBeTruthy()
		expect(CardResponseV2.is(card2)).toBeTruthy()
	})

	it("card from batch", async () => {
		const card = {
			cardType: "VISA_DEBIT",
			cardNumber: "4871848003/16/0000/1550/************************************************/**********************/pan",
			cvv: "4871848003/16/0000/1550/************************************************/**********************/csc",
			expiryDate: "2022-11",
			nameOnCard: "test test",
			balance: 1,
			currency: "GBP",
			fundingBalance: 5,
			fundingDate: "2022-10-26",
			issueDate: "2022-09-16",
			providerCode: "modulr",
			providerCardId: "V12000T2MV",
			usage: "SINGLE_USE",
			batchId: "7rcvyvgccd",
			state: "ACTIVE",
			fundingAccount: {
				providerAccountId: "A120ABTA",
				balance: 35725.51,
				friendlyName: "Flights",
			},
			bookingInfo: {
				type: "FIVE_FIELDS",
				agentBookingReference: "rrr",
				departureDate: "2020-01-01",
				supplierBookingReference: "qwert",
				leadPassengerName: "chris",
				supplierCode: "test",
			},
			schedule: [
				{
					dueOn: "2022-10-26T00:00:00",
					status: "TODO",
					taskType: "CARD_AMENDMENT",
					taskId: "modulr-V12000T2MV-1",
					newBalance: 5,
				},
				{
					dueOn: "2022-10-26T00:00:00",
					status: "TODO",
					taskType: "CARD_STATE_CHANGE",
					taskId: "modulr-V12000T2MV-2",
					desiredState: "THAW",
				},
			],
			delivery: {
				type: "EMAIL",
				to: "christoffer.johansson@paxport.net",
				deliveredMessage: "test",
				linkExpiry: "2022-10-22",
				sent: "2022-09-16T15:50:28.583102",
				status: "PENDING",
			},
			createdBy: "christofferj",
		}
		expect(CardResponseV2.is(card)).toBeTruthy()
	})
})
