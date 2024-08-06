import { UserSearchRequest } from "../index"

describe("UserSearchRequest", () => {
	it("flaw", () => {
		const search = {
			category: 3,
			status: ["NON-ACTIVE"],
			lastLoggedIn: { start: "2023-05-01" },
		}
		expect(UserSearchRequest.is(search)).toBeFalsy()
		console.log(UserSearchRequest.flaw(search))
	})
})
