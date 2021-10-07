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
	for (const currency of ["EUR", "GBP", "USD"])
		for (const cardType of ["VISA_DEBIT", "VISA_CREDIT", "MASTERCARD"])
			it(`card ${currency} ${cardType}`, async () => {
				const request = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountIxaris${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "ixaris",
					balance: 0,
					friendlyName: new Date().toISOString().slice(0, 20) + "ixaris" + cardType + currency,
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
