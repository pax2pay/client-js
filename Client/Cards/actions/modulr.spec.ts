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
	for (const currency of ["EUR", "GBP"])
		for (const cardType of ["VISA_DEBIT_CORPORATE", "VISA", "VISA_CREDIT_CORPORATE", "VISA_DEBIT"])
			it(`card ${currency} ${cardType}`, async () => {
				const request = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountModulr${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "modulr",
					balance: mathExact("Divide", Math.round(Math.random() * 499 + 1), 100),
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
