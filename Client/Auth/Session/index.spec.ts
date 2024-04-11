import { Session } from "."

describe("Session", () => {
	it("roles set/get", () => {
		expect(Session.roles.getItem()).toEqual(undefined)

		const roles = ["api-key.create", "api-key.edit", "card.cancel", "card.create"]
		Session.roles.setItem(roles)
		expect(Session.roles.getItem()).toEqual(roles)

		Session.roles.setItem(undefined)
		expect(Session.roles.getItem()).toEqual(undefined)
	})
	it("authData set/get", () => {
		expect(Session.authentication.getItem()).toEqual(undefined)

		const data = { token: "ey" }
		Session.authentication.setItem(data)
		expect(Session.authentication.getItem()).toEqual(data)

		Session.authentication.setItem(undefined)
		expect(Session.authentication.getItem()).toEqual(undefined)
	})
	it("listen", () => {
		Session.roles.setItem(["a", "b", "c"])
		let roles: string[] | undefined
		let lazyRoles: string[] | undefined
		const listener = Session.roles.listen(value => (roles = value))
		const lazyListener = Session.roles.lazyListen(value => (lazyRoles = value))
		expect(roles).toEqual(["a", "b", "c"])
		expect(lazyRoles).toEqual(undefined)

		Session.roles.setItem(["d"])
		expect(roles).toEqual(["d"])
		expect(lazyRoles).toEqual(["d"])

		Session.roles.unlisten(lazyListener)
		Session.roles.setItem(["f"])
		expect(roles).toEqual(["f"])
		expect(lazyRoles).toEqual(["d"])

		Session.roles.unlisten(lazyListener)
		Session.roles.setItem(["h"])
		expect(lazyRoles).toEqual(["d"])
		expect(lazyRoles).toEqual(["d"])
	})
})
