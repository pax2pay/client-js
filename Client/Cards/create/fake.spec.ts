import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create fake", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	for (const currency of ["EUR", "GBP", "SEK", "JPY", "BRL"])
		for (const cardType of ["VISA_CREDIT", "MASTERCARD"])
			it(`card ${currency} ${cardType}`, async () => {
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountFake${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "fake",
				})
				const cardV2 = await client?.cards.create(request)
				const cardLegacy = await client?.cards.createLegacy(request)

				if (ErrorResponse.is(cardV2))
					throw Error(cardV2.errors?.[0].message)
				else if (ErrorResponse.is(cardLegacy))
					throw Error(cardLegacy.errors?.[0].message)
				else {
					expect(cardV2).toBeTruthy()
					expect(cardLegacy).toBeTruthy()

					expect(cardV2).toMatchObject(expectedV2)
					expect(cardLegacy).toMatchObject(expectedLegacy)
				}
			})
})
