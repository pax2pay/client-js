import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.users.fetch", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("current user", async () => {
		const user = await client?.users.fetch(process.env.username)
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
})
