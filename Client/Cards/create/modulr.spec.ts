import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create modulr", () => {
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
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountModulr${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "modulr",
				})

				const cardV2 = await new Promise(resolve => {
					return setTimeout(() => {
						resolve(client?.cards.create(request))
					}, 5000)
				})
				const cardLegacy = await new Promise(resolve => {
					return setTimeout(() => {
						resolve(client?.cards.createLegacy(request))
					}, 5000)
				})

				expect(cardV2).toMatchObject(expectedV2)
				expect(cardLegacy).toMatchObject(expectedLegacy)
			})
})
