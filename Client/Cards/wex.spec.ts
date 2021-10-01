import { randomInt } from "crypto"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import * as model from "../../model"
import { Card } from "../Card"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.cards.create", () => {
	const client = pax2pay.Client.create(process.env.url)
	/* beforeAll(async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		console.log(resp)
	}) */
	it("create for all providers except modulr", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}
		console.log(resp)
		const provider = "wex"
		//get card types
		const cardTypes = await client?.cards.getCardTypes(provider)
		const fundingAccountRequest: model.FundingAccountSearchRequest = { providerCodes: [provider] }
		const fundingAccountIds:
			| undefined
			| ErrorResponse
			| model.CardFundingAccountResponse[] = await client?.cards.getFundingAccounts(fundingAccountRequest)
		if (ErrorResponse.is(cardTypes)) {
			return new Error(cardTypes.errors?.[0].message ?? "error")
		} else if (ErrorResponse.is(fundingAccountIds)) {
			return new Error(fundingAccountIds.errors?.[0].message ?? "error")
		} else if (cardTypes) {
			// go through all card types
			const result = await Promise.all(
				cardTypes
					.filter(cardType => {
						return cardType.cardTypeId !== "jitlesstest"
					})
					.map(async cardType => {
						if (
							fundingAccountIds &&
							!(cardType.discontinued && cardType.discontinued === true) &&
							!(cardType.preActive && cardType.preActive === true)
						) {
							const currencies = Array.from(
								new Set(fundingAccountIds.map(fundingAccount => fundingAccount.currency)).values()
							)

							//go through currencies available from funding accounts
							const cards = await Promise.all(
								currencies.map(async currency => {
									let fundingAccountIndex = 0
									const validFundingAccounts = fundingAccountIds.filter(fundingAccount => {
										return fundingAccount.state == "ACTIVE" && fundingAccount.currency.toString() == currency.toString()
									})

									if (validFundingAccounts.length === 0) {
										return {}
									}
									while (validFundingAccounts[fundingAccountIndex].providerAccountId === "xsstesting") {
										fundingAccountIndex++
										if (fundingAccountIndex >= validFundingAccounts.length) {
											return {}
										}
									}
									const createCardRequest: model.CreateCardRequest = {
										cardType: {
											cardTypeId: cardType.cardTypeId,
										},
										providerAccountId: validFundingAccounts[fundingAccountIndex].providerAccountId,
										currency: currency,
										providerCode: provider,
										balance: 1 + randomInt(9),
										friendlyName: resp?.trackingId + (cardType.cardTypeId ? cardType.cardTypeId : "") + currency,
									}
									const cardResponse:
										| ErrorResponse
										| (Card & model.CardResponseV2)
										| undefined = await client?.cards.create(createCardRequest)

									if (ErrorResponse.is(cardResponse)) {
										return new Error(cardResponse.errors?.[0].message ?? "error")
									} else if (cardResponse == undefined) {
										return "IM UNDEFINED"
									}
									return cardResponse
								})
							)
							return cards.flat()
						} else {
							return "Invalid card type"
						}
					})
			)

			//await console.log(result.flat())
			result
				.flat()
				.filter(card => card != undefined && card != null && card !== "Invalid card type")
				.forEach(card => {
					expect(card).toMatchObject({
						cardType: expect.any(String),
						cardNumber: expect.any(String),
						cvv: expect.any(String),
						expiryDate: expect.any(String),
						nameOnCard: expect.any(String),
						balance: expect.any(Number),
						issueDate: expect.any(String),
						providerCardId: expect.any(String),
						providerCode: expect.any(String),
						usage: expect.any(String),
						createdBy: expect.any(String),
					})
				})
		}
	})
})
