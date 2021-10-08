import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { actionTest } from "./actionTest"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.actions ixaris", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)

	it("card GBP MASTERCARD", async () => {
					const request = factory({
						cardType: {
							cardTypeId: "MASTERCARD",
						},
						currency: "GBP",
						providerAccountId: process.env["accountIxarisGbp"],
						providerCode: "ixaris",
						balance: 0,
						friendlyName: new Date().toISOString().slice(0, 20) + "ixaris" + "MASTERCARDGBP",
					})

					const cardLegacy = await client?.cards.createLegacy(request)

					assert(!ErrorResponse.is(cardLegacy))
					assert(cardLegacy != undefined)
					assert(client != undefined)
					await actionTest(cardLegacy, client)
					
				})
})
