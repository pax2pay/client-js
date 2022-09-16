import * as dotenv from "dotenv"
import * as pax2pay from "../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.organisations.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("all orgs", async () => {
		const organizations = await client?.organisations.list()
		expect(Array.isArray(organizations)).toEqual(true)
		if (Array.isArray(organizations))
			for (const organization of organizations) {
				expect(organization).toMatchObject({
					code: expect.stringContaining(""),
					folder: expect.stringContaining("organisations/"),
					name: expect.stringContaining(""),
					status: expect.stringMatching(/(ACTIVE)|(INACTIVE)/),
				})
			}
	})
})
