import { CardAmendmentScheduledTaskResponse } from "./CardAmendmentScheduledTaskResponse"
import { CardScheduleResponseItem } from "./CardScheduleResponseItem"
import { CardStateChangeScheduledTaskResponse } from "./CardStateChangeScheduledTaskResponse"

describe("", () => {
	it("", () => {
		const response = [
			{
				dueOn: "2022-08-25T00:00:00",
				status: "TODO",
				taskType: "CARD_STATE_CHANGE",
				taskId: "modulr-V12000PUGV-1",
				desiredState: "THAW",
			},
			{
				dueOn: "2022-08-25T00:00:00",
				status: "TODO",
				taskType: "CARD_AMENDMENT",
				taskId: "modulr-V12000PUGV-5",
				newBalance: 2,
			},
			{
				dueOn: "2022-09-09T00:00:00",
				status: "TODO",
				taskType: "CARD_STATE_CHANGE",
				taskId: "modulr-V12000PUGV-2",
				desiredState: "THAW",
			},
			{
				dueOn: "2022-09-09T00:00:00",
				status: "TODO",
				taskType: "CARD_AMENDMENT",
				taskId: "modulr-V12000PUGV-6",
				remainingBalance: 1,
			},
			{
				dueOn: "2022-10-29T00:00:00",
				status: "TODO",
				taskType: "CARD_STATE_CHANGE",
				taskId: "modulr-V12000PUGV-3",
				desiredState: "THAW",
			},
			{
				dueOn: "2022-10-29T00:00:00",
				status: "TODO",
				taskType: "CARD_AMENDMENT",
				taskId: "modulr-V12000PUGV-7",
				remainingBalance: 3,
			},
			{
				dueOn: "2022-10-30T00:00:00",
				status: "TODO",
				taskType: "CARD_STATE_CHANGE",
				taskId: "modulr-V12000PUGV-4",
				desiredState: "THAW",
			},
			{
				dueOn: "2022-10-30T00:00:00",
				status: "TODO",
				taskType: "CARD_AMENDMENT",
				taskId: "modulr-V12000PUGV-8",
				remainingBalance: 1,
			},
		]

		expect(
			response.every(a => {
				return CardStateChangeScheduledTaskResponse.is(a) || CardAmendmentScheduledTaskResponse.is(a)
			})
		).toBeTruthy()
	})
})
