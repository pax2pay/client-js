import { TaskStatus } from "./TaskStatus"

describe("", () => {
	it("", () => {
		const shouldBe = [
			"TODO",
			"CANCELLED",
			"CANCELLED_EXCEPTIONALLY",
			"SUCCESSFUL",
			"FAILED",
			"FAILED_EXCEPTIONALLY",
			"HALTED",
			"PENDING",
			"PENDING_DECLINED",
		]

		expect(shouldBe.every(TaskStatus.is)).toBeTruthy()
	})
})
