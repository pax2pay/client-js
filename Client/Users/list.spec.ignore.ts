import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.users.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("first page", async () => {
		const users = await client?.users.list()
		expect(Array.isArray(users)).toEqual(true)
		if (Array.isArray(users))
			for (const user of users)
				expect(user).toMatchObject({
					"2fa": {
						enabled: expect.any(Boolean),
					},
					email: expect.any(String),
					firstName: expect.any(String),
					folder: expect.stringMatching(/users\/.*/),
					lastName: expect.any(String),
					organisation: {
						code: expect.any(String),
						name: expect.any(String),
						status: expect.stringMatching(/(ACTIVE)|(INACTIVE)/),
					},
				})
	})
	it.skip("username asc, email desc", async () => {
		const users = await client?.users.list(0, 20, ["username", { property: "email", direction: "descending" }])
		expect(Array.isArray(users)).toEqual(true)
		if (Array.isArray(users))
			expect(users).toHaveLength(20)
	})
})
