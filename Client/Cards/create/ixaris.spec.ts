import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create ixaris", () => {
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
<<<<<<< HEAD
=======
				//authing inside test to reach trackingId for unique friendly names, maybe there's another way
				const loginResponse = await client?.auth.login({
					username: process.env.username ?? "user",
					password: process.env.password ?? "password",
				})

				console.log(loginResponse)

				if (ErrorResponse.is(loginResponse)) {
					return new Error(loginResponse.errors?.[0].message ?? "error")
				}

>>>>>>> WIP started amend and freeze
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountIxaris${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "ixaris",
					friendlyName: new Date().toISOString().slice(0, 20) + "ixaris" + cardType + currency,
				})

				const cardV2 = await client?.cards.create({
					...request,
					friendlyName: request.friendlyName + "V2",
				})
				const cardLegacy = await client?.cards.createLegacy({
					...request,
					friendlyName: request.friendlyName + "Legacy",
				})
<<<<<<< HEAD
				expect(cardV2).toMatchObject(expectedV2)
				expect(cardLegacy).toMatchObject(expectedLegacy)
=======

				if (ErrorResponse.is(cardV2))
					throw Error(cardV2.errors?.[0].message)
				else if (ErrorResponse.is(cardLegacy))
					throw Error(cardLegacy.errors?.[0].message)
				else {
					expect(cardV2).toBeTruthy()
					expect(cardLegacy).toBeTruthy()

					expect(cardV2).toMatchObject(expectedV2)
					expect(cardLegacy).toMatchObject(expectedLegacy)

					const amendedCardV2 = await cardV2?.amend({
						newBalance: 2,
						currency: currency,
					})

					expect(amendedCardV2).toMatchObject({ balance: 2 })

					const frozenCard = await cardV2?.freeze()

					expect(frozenCard).toMatchObject({ state: "INACTIVE" })
				}
>>>>>>> WIP started amend and freeze
			})
})
