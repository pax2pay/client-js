import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import { assertsFactoryCard, assertsFactoryGeneric } from "./assertsFactory"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () => 
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
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

	it("specific provider", async () => {

		//only takes the legacy version with [1]
		const expected = assertsFactoryGeneric()[1]
		const expectedFake = {
			...expected,
			providerCode: "fake"
		}

		const fakeCards = await client?.cards.getCardsForProvider("fake")
		assert(!ErrorResponse.is(fakeCards))
		assert(fakeCards != undefined)

		expect(Array.isArray(fakeCards)).toBeTruthy()

		for (const card of fakeCards)
			expect(card).toMatchObject(expectedFake)
	})

	it("specific card", async () => {


		const expected = assertsFactoryCard({cardType: {
			cardTypeId: "MASTERCARD",
		},
		providerAccountId: "active_test",
		providerCode: "fake",
		balance: 1,
		currency: "GBP",
		friendlyName: "9ca4a3f7-f03a-4a66-8802-bdf8c892cc80"})[1]
		
		
		const expectedSpecific = {
				...expected,
        nameOnCard: 'Toppy',
        cardNumber: '552909******3445',
        cvv: '***',
        issueDate: '2021-09-29',
        expiryDate: '2022-04-29',
        cardForm: 'GENERATABLE',
        usage: 'SINGLE_USE',
        state: 'ACTIVE',
        providerCardId: 'Yvo0EOIEWvjX',
        creatingSystem: 'REST_API',
        createdBy: 'mcom-sa'
      }

		const card = await client?.cards.getCard("Yvo0EOIEWvjX", "fake")
		assert(!ErrorResponse.is(card))
		assert(card != undefined)

		expect(card).toMatchObject(expectedSpecific)
	})
})
