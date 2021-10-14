import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import { assertsFactoryGeneric } from "./assertsFactory"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () => {
			const loginResponse =	await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
			console.log(loginResponse)
		}
	)
	it("first page", async () => {

		//only takes the legacy version with [1]
		const expected = assertsFactoryGeneric()[1]

		const list = await client?.cards.list()
		assert(!ErrorResponse.is(list))
		assert(list != undefined)

		expect(Array.isArray(list)).toBeTruthy()
		expect(list).toHaveLength(20)

		for (const card of list)
			expect(card).toMatchObject(expected)

		const list40 = await client?.cards.list(0,40)
		assert(!ErrorResponse.is(list40))
		assert(list40 != undefined)

		expect(Array.isArray(list40)).toBeTruthy()
		expect(list40).toHaveLength(40)

		
		for (const card of list40)
			expect(card).toMatchObject(expected)
	})
})
