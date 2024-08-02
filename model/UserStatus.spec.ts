import { UserStatus } from "../index"

describe("UserStatus", () => {
	it("is", () => {
		expect(UserStatus.is("ACTIVE")).toBeTruthy()
		expect(UserStatus.is("NON-ACTIVE")).toBeFalsy()
	})
})
