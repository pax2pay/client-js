import assert from "assert"
import * as dotenv from "dotenv"
import { mathExact } from "math-exact"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { actionTest } from "./actionTest"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.actions modulr", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("card USD VISA", async () => {
		const request = factory({
			cardType: {
				cardTypeId: "VISA",
			},
			currency: "USD",
			providerAccountId: process.env["accountModulrUsd"],
			providerCode: "modulr",
			balance: mathExact("Divide", Math.round((Math.random() * 4 + 1) * 100), 100),
		})

		const cardLegacy = await client?.cards.createLegacy(request)

		assert(!ErrorResponse.is(cardLegacy))
		assert(cardLegacy != undefined)
		assert(client != undefined)

		await actionTest(cardLegacy, client)
	})
})
