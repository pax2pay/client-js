import * as dotenv from "dotenv"
import * as pax2pay from "../../../index"
import { factory } from "./factory"

dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create ixaris", () => {
	const client = pax2pay.Client.create(process.env.url)
<<<<<<< HEAD
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
=======
	beforeAll(async () => {
		const loginResponse = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
	})
	for (const currency of ["EUR", "GBP", "USD"])
		for (const cardType of ["VISA_DEBIT", "VISA_CREDIT", "MASTERCARD"])
			it(`card ${currency} ${cardType}`, async () => {
>>>>>>> Still wip, did actions for ixaris + corrections
				const [request, expectedV2, expectedLegacy] = factory({
					cardType: {
						cardTypeId: cardType,
					},
					currency: currency,
					providerAccountId: process.env[`accountIxaris${currency.charAt(0)}${currency.toLowerCase().slice(1)}`],
					providerCode: "ixaris",
<<<<<<< HEAD
					friendlyName: new Date().toISOString().slice(0, 20) + "ixaris" + cardType + currency,
=======
					balance: 0,
					friendlyName: new Date().toISOString().slice(0, 19) + "ixaris" + cardType + currency,
>>>>>>> Still wip, did actions for ixaris + corrections
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

					const amendedCard = await cardLegacy?.amend({
						newBalance: 1,
						currency: currency,
					})
					if (cardLegacy && cardLegacy.providerCardId && cardLegacy.providerCode) {
						expect(amendedCard).toMatchObject({ balance: 1 })
						expect(await client?.cards.getCard(cardLegacy?.providerCardId, cardLegacy?.providerCode)).toMatchObject({
							balance: 1,
						})

						const frozenCard = await cardLegacy?.freeze()

						if (ErrorResponse.is(frozenCard)) {
							throw Error("Freeze failed")
						} else {
							expect(frozenCard).toMatchObject({ state: "INACTIVE" })

							const frozenActualCard = await client?.cards.getCard(cardLegacy?.providerCardId, cardLegacy?.providerCode)

							if (ErrorResponse.is(frozenActualCard) || frozenActualCard == undefined)
								throw Error("Could not get card after freeze")
							else {
								expect(frozenActualCard).toMatchObject({
									state: "INACTIVE",
								})
								if (frozenActualCard.providerCode && frozenActualCard.providerCardId) {
									const thawedCard = await frozenActualCard.thaw()
									if (ErrorResponse.is(thawedCard)) {
										throw Error("Thaw failed")
									} else {
										expect(thawedCard).toMatchObject({ state: "ACTIVE" })

										const thawedActualCard = await client?.cards.getCard(
											cardLegacy?.providerCardId,
											cardLegacy?.providerCode
										)

										if (ErrorResponse.is(thawedActualCard) || thawedActualCard == undefined)
											throw Error("Could not get card after thaw")
										else {
											expect(thawedActualCard).toMatchObject({
												state: "ACTIVE",
											})

											const cancelledCard = await thawedActualCard.cancel()
											if (ErrorResponse.is(cancelledCard)) {
												throw Error("Cancel failed")
											} else {
												expect(cancelledCard).toMatchObject({ state: "DELETED" })

												const cancelledActualCard = await client?.cards.getCard(
													cardLegacy?.providerCardId,
													cardLegacy?.providerCode
												)

												if (ErrorResponse.is(cancelledActualCard) || cancelledActualCard == undefined)
													throw Error("Could not get card after cancel")
												else {
													expect(cancelledActualCard).toMatchObject({
														state: "DELETED",
													})
												}
											}
										}
									}
								}
							}
						}
					}
				}
>>>>>>> WIP started amend and freeze
			})
})
