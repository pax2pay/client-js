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
})