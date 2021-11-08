import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import * as factory from "./factory"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.transfers.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)

	it("first page", async () => {
		const expected = factory.getExpectedForGeneric()

		const transfers = await client?.transfers.list()

		assert(!ErrorResponse.is(transfers))
		assert(transfers != undefined)
		assert(Array.isArray(transfers))

		expect(transfers).toHaveLength(20)
		for (const transfer of transfers)
			expect(transfer).toMatchObject(expected)

		const transfers100 = await client?.transfers.list(1, 100)

		assert(!ErrorResponse.is(transfers100))
		assert(transfers100 != undefined)
		assert(Array.isArray(transfers100))

		expect(transfers100).toHaveLength(100)
		for (const transfer of transfers100)
			expect(transfer).toMatchObject(expected)
	})
})
