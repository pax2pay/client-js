import { Session } from "."

// const sessionStorage =

describe("Session", () => {
	it("roles set/get", () => {
		expect(Session.getItem("roles")).toEqual(undefined)

		const roles = ["api-key.create", "api-key.edit", "card.cancel", "card.create"]
		Session.setItem("roles", roles)
		expect(Session.getItem("roles")).toEqual(roles)

		Session.setItem("roles", undefined)
		expect(Session.getItem("roles")).toEqual(undefined)
	})
	it("authData set/get", () => {
		expect(Session.getItem("authData")).toEqual(undefined)

		const data = { token: "ey" }
		Session.setItem("authData", data)
		expect(Session.getItem("authData")).toEqual(data)

		Session.setItem("authData", undefined)
		expect(Session.getItem("authData")).toEqual(undefined)
	})
	it("listen", () => {
		Session.setItem("roles", ["a", "b", "c"])
		let roles: string[] | undefined
		let lazyRoles: string[] | undefined
		const listener = Session.listen("roles", value => (roles = value))
		const lazyListener = Session.lazyListen("roles", value => (lazyRoles = value))
		expect(roles).toEqual(["a", "b", "c"])
		expect(lazyRoles).toEqual(undefined)

		Session.setItem("roles", ["d"])
		expect(roles).toEqual(["d"])
		expect(lazyRoles).toEqual(["d"])

		Session.unlisten("roles", listener)
		Session.setItem("roles", ["f"])
		expect(roles).toEqual(["d"])
		expect(lazyRoles).toEqual(["f"])

		Session.unlisten("roles", lazyListener)
		Session.setItem("roles", ["h"])
		expect(lazyRoles).toEqual(["f"])
	})
})
