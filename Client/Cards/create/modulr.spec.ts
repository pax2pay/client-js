import * as dotenv from "dotenv"
import { mathExact } from "math-exact"
import * as pax2pay from "../../../index"
import { CreateCardRequest } from "../../../model"
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
	for (const currency of ["EUR", "GBP", "PLN", "USD"])
		for (const cardType of ["VISA_DEBIT_CORPORATE", "VISA", "VISA_CREDIT_CORPORATE", "VISA_DEBIT"])
			it(`card ${currency} ${cardType}`, async () => {
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountModulr${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "modulr",
					balance: mathExact("Divide", Math.round((Math.random() * 4 + 1) * 100), 100),
				})
				const cardV2 = await client?.cards.create({
					...(request as CreateCardRequest),
					currency: (request as CreateCardRequest).currency,
					balance: mathExact("Add", request.balance, 1),
				})
				const cardLegacy = await client?.cards.createLegacy({
					...(request as CreateCardRequest),
					balance: mathExact("Add", request.balance, 2),
				})

				expect(cardV2).toMatchObject(expectedV2)
				expect(cardLegacy).toMatchObject(expectedLegacy)
			})
})
