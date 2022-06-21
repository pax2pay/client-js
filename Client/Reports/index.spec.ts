import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.reports", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("reconciliation report", async () => {
		const report = await client?.reports.reconciliation("2021-01-01T00:00:00.000Z", "2021-01-10T23:59:59.999Z")
		expect(report).toMatchObject({
			report: {
				rows: expect.any(Array),
			},
		})
	})
	it("account statement", async () => {
		const report = await client?.reports.statement("2021-01-01T00:00:00.000Z", "2021-06-14T23:59:59.999Z", "A120ABTA")
		expect(report).toMatchObject({
			report: {
				accountIdentifier: expect.any(String),
				closingBalance: expect.any(Number),
				from: expect.any(String),
				openingBalance: expect.any(Number),
				statements: expect.any(Array),
			},
		})
	})

	it("attachPageable", async () => {
		const result = await client?.reports.attachPageable("statement", 2, 10)
		expect(result).toEqual("statement?page=2&size=10")
		const result2 = await client?.reports.attachPageable("statement", 5, 30)
		expect(result2).toEqual("statement?page=5&size=30")
	})
})
