import * as isoly from "isoly"
import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { CreateCardRequest } from "../../../model/Card/CreateCardRequest"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create pax2pay", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(async () => {
		await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
	})
	for (const currency of ["GBP"] as isoly.Currency[])
		for (const cardType of ["jittest"])
			it(`card ${currency} ${cardType}`, async () => {
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountPax2pay${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "pax2pay",
				})
				const cardV2 = await client?.cards.create(request as CreateCardRequest)
				const cardLegacy = await client?.cards.createLegacy(request as CreateCardRequest)

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
