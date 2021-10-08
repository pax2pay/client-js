import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import { actionTest } from "./actionTest"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.actions fake", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	
			it("card EUR VISA_CREDIT", async () => {
				const request = factory({
					cardType: {
						cardTypeId: "VISA_CREDIT",
					},
					currency: "EUR",
					providerAccountId: process.env["accountFakeEur"],
					providerCode: "fake",
				})

				const cardLegacy = await client?.cards.createLegacy(request)

				assert(!ErrorResponse.is(cardLegacy))
				assert(cardLegacy != undefined)
				assert(client != undefined)
				await actionTest(cardLegacy, client)
				
			})
})
