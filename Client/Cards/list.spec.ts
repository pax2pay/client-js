import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)
	it("first page", async () => {
		const list = await client?.cards.list()
		expect(Array.isArray(list)).toEqual(true)
		if (Array.isArray(list))
			for (const card of list)
				expect(card).toMatchObject({
					balance: expect.any(Number),
					cardAccount: {
						accountType: "CARD",
						balance: expect.any(Number),
						createdOn: expect.any(String),
						currency: expect.any(String),
						friendlyName: expect.any(String),
						id: expect.any(Number),
						organisation: {
							code: expect.any(String),
							name: expect.any(String),
							status: expect.stringMatching(/(ACTIVE)|(INACTIVE)/),
						},
						provider: {
							code: expect.any(String),
							id: expect.any(Number),
							name: expect.any(String),
							status: "ACTIVE",
						},
						providerAccountId: expect.any(String),
						state: expect.stringMatching(/(DELETED)|(ACTIVE)|(EXPIRED)/),
						updatedOn: expect.any(String),
					},
					cardForm: expect.any(String),
					cardNumber: expect.any(String),
					cardType: expect.any(String),
					createdBy: expect.any(String),
					creatingSystem: expect.any(String),
					cvv: expect.any(String),
					expiryDate: expect.any(String),
					folder: expect.any(String),
					issueDate: expect.any(String),
					nameOnCard: expect.any(String),
					providerCardId: expect.any(String),
					providerCode: expect.any(String),
					state: expect.any(String),
					usage: expect.any(String),
					useAs: expect.any(String),
				})
	})
})
