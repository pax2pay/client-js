import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create ixaris", () => {
	const client = pax2pay.Client.create(process.env.url)
	for (const currency of ["EUR", "GBP", "USD"])
		for (const cardType of ["VISA_DEBIT", "VISA_CREDIT", "MASTERCARD"])
			it(`card ${currency} ${cardType}`, async () => {
				//authing inside test to reach trackingId for unique friendly names, maybe there's another way
				const loginResponse = await client?.auth.login({
					username: process.env.username ?? "user",
					password: process.env.password ?? "password",
				})

				if (ErrorResponse.is(loginResponse)) {
					return new Error(loginResponse.errors?.[0].message ?? "error")
				}

				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountIxaris${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "ixaris",
					friendlyName: loginResponse?.trackingId + "ixaris" + cardType + currency,
				})
				const cardV2 = await client?.cards.create({
					...request,
					friendlyName: request.friendlyName + "V2",
				})
				const cardLegacy = await client?.cards.createLegacy({
					...request,
					friendlyName: request.friendlyName + "Legacy",
				})

				expect(cardV2).toMatchObject(expectedV2)
				expect(cardLegacy).toMatchObject(expectedLegacy)
			})
})
