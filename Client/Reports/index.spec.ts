import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(100000)

describe("pax2pay.reports.reconciliationReport", () => {
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
})
