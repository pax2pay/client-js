import { Session } from "."

describe("Session", () => {
	it("roles set/get", () => {
		expect(Session.roles.get()).toEqual(undefined)

		const roles = ["api-key.create", "api-key.edit", "card.cancel", "card.create"]
		Session.roles.set(roles)
		expect(Session.roles.get()).toEqual(roles)

		Session.roles.set(undefined)
		expect(Session.roles.get()).toEqual(undefined)
	})
	it("authData set/get", () => {
		expect(Session.login.get()).toEqual(undefined)

		const data = { token: "ey" }
		Session.login.set(data)
		expect(Session.login.get()).toEqual(data)

		Session.login.set(undefined)
		expect(Session.login.get()).toEqual(undefined)
	})
})
