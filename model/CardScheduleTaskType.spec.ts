import { CardScheduleTaskType } from "./CardScheduleTaskType"

describe("", () => {
	it("", () => {
		expect(CardScheduleTaskType.is("CARD_AMENDMENT")).toBeTruthy()
		expect(CardScheduleTaskType.is("CARD_STATE_CHANGE")).toBeTruthy()
	})
})
