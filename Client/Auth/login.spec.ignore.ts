import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.auth.login", () => {
	const client = pax2pay.Client.create(process.env.url)
	it("simple", async () => {
		expect(
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
		).toMatchObject({
			effectiveOrganisation: { code: expect.any(String), name: expect.any(String) },
		})
	})
})
