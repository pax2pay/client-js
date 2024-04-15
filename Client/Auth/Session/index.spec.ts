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
	it("listen", () => {
		Session.roles.set(["a", "b", "c"])
		let roles: string[] | undefined
		let lazyRoles: string[] | undefined
		const listener = Session.roles.listen(value => (roles = value))
		const lazyListener = Session.roles.lazyListen(value => (lazyRoles = value))
		expect(roles).toEqual(["a", "b", "c"])
		expect(lazyRoles).toEqual(undefined)

		Session.roles.set(["d"])
		expect(roles).toEqual(["d"])
		expect(lazyRoles).toEqual(["d"])

		Session.roles.unlisten(lazyListener)
		Session.roles.set(["e"])
		expect(roles).toEqual(["e"])
		expect(lazyRoles).toEqual(["d"])

		Session.roles.unlisten(listener)
		Session.roles.set(["f"])
		expect(roles).toEqual(["e"])
		expect(lazyRoles).toEqual(["d"])
	})
})
