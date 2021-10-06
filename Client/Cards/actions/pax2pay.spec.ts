import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { actionTest } from "./actionTest"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.actions pax2pay", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	for (const currency of ["GBP"])
		for (const cardType of ["jittest"])
			it(`card ${currency} ${cardType}`, async () => {
				const request = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountPax2pay${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "pax2pay",
				})

				const cardLegacy = await client?.cards.createLegacy(request)

				if (ErrorResponse.is(cardLegacy) || !cardLegacy)
					throw Error("Could not create card.")
				else if (!client)
					throw Error("No client available")
				else {
					await actionTest(cardLegacy, client)
				}
			})
})
