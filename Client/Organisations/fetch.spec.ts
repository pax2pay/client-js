import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.organisations.fetch", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("mcom", async () => {
		const name = "mcom"
		expect(await client?.organisations.fetch(name)).toEqual({
			code: name,
			folder: "organisations/" + name,
			name: expect.any(String),
			status: "ACTIVE",
		})
	})
})
