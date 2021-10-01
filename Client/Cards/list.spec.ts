import { randomInt } from "crypto"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import * as model from "../../model"
import { Card } from "../Card"
dotenv.config()
jest.setTimeout(200000)

const PROVIDERS: model.ProviderCode[] = ["ixaris", "fake", "pax2pay"] // conferma having issues as this was written, wex also but more of a bug, modulr done separately

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

describe("pax2pay.cards.create", () => {
	const client = pax2pay.Client.create(process.env.url)
	/* beforeAll(async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		console.log(resp)
	}) */
	it("create for pax2pay, fake and ixaris", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}
		const result = await Promise.all(
			PROVIDERS.map(async provider => {
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
					const promises = cardTypes
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
								const cards: (
									| ErrorResponse
									| (Card & model.CardResponse)
									| (Card & model.CardResponseV2)
								)[][] = await Promise.all(
									currencies.map(async currency => {
										let fundingAccountIndex = 0
										const validFundingAccounts = fundingAccountIds.filter(fundingAccount => {
											return (
												fundingAccount.state == "ACTIVE" && fundingAccount.currency.toString() == currency.toString()
											)
										})

										if (validFundingAccounts.length === 0) {
											return []
										}
										while (validFundingAccounts[fundingAccountIndex].providerAccountId === "xsstesting") {
											fundingAccountIndex++
											if (fundingAccountIndex >= validFundingAccounts.length) {
												return []
											}
										}
										const createCardRequest: model.CreateCardRequest = {
											cardType: {
												cardTypeId: cardType.cardTypeId,
											},
											providerAccountId: validFundingAccounts[fundingAccountIndex].providerAccountId,
											currency: currency,
											providerCode: provider,
											balance: 1,
											friendlyName: resp?.trackingId + (cardType.cardTypeId ? cardType.cardTypeId : "") + currency,
										}
										const cardResponse:
											| ErrorResponse
											| (Card & model.CardResponseV2)
											| undefined = await client?.cards.create(createCardRequest)

										const cardResponseLegacy:
											| ErrorResponse
											| (Card & model.CardResponse)
											| undefined = await client?.cards.createLegacy({
											...createCardRequest,
											friendlyName:
												resp?.trackingId + (cardType.cardTypeId ? cardType.cardTypeId : "") + currency + "Legacy",
										})

										if (ErrorResponse.is(cardResponse)) {
											throw new Error(cardResponse.errors?.[0].message ?? "error")
										} else if (cardResponse == undefined) {
											throw new Error("IM UNDEFINED")
										}
										return [cardResponse, cardResponseLegacy]
									})
								)
								return cards
							} else {
								return "Invalid card type"
							}
						})
					return (await Promise.all(promises)).flat()
				}
			})
		)
		console.log(result.flat())
		result
			.flat()
			.filter(cardPair => cardPair != undefined && cardPair !== "Invalid card type")
			.forEach(cardPair => {
				if (cardPair != undefined && cardPair !== "Invalid card type" && !ErrorResponse.is(cardPair))
					expect(cardPair[0]).toMatchObject({
						cardType: expect.any(String),
						cardNumber: expect.stringMatching(/\d{16}/),
						cvv: expect.stringMatching(/\d{3}/),
						expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
						nameOnCard: expect.any(String),
						balance: 1,
						issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
						providerCardId: expect.any(String),
						providerCode: expect.stringMatching(/(fake)|(pax2pay)|(ixaris)/),
						usage: "SINGLE_USE",
						createdBy: expect.any(String),
					})
			})
	})

	it("modulr card,VISA GBP", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA",
			},
			providerAccountId: "A120ABTA",
			currency: "GBP",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA" + "GBP",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_CREDIT_CORPORATE GBP", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_CREDIT_CORPORATE",
			},
			providerAccountId: "A120ABTA",
			currency: "GBP",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_CREDIT_CORPORATE" + "GBP",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_CREDIT_CORPORATE",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_DEBIT GBP", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_DEBIT",
			},
			providerAccountId: "A120ABTA",
			currency: "GBP",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_DEBIT" + "GBP",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_DEBIT",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_DEBIT_CORPORATE GBP", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_DEBIT_CORPORATE",
			},
			providerAccountId: "A120ABTA",
			currency: "GBP",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_DEBIT_CORPORATE" + "GBP",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_DEBIT_CORPORATE",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA EUR", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA",
			},
			providerAccountId: "A120C7V8",
			currency: "EUR",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA" + "EUR",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_CREDIT_CORPORATE EUR", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_CREDIT_CORPORATE",
			},
			providerAccountId: "A120C7V8",
			currency: "EUR",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_CREDIT_CORPORATE" + "EUR",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_CREDIT_CORPORATE",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_DEBIT EUR", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_DEBIT",
			},
			providerAccountId: "A120C7V8",
			currency: "EUR",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_DEBIT" + "EUR",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_DEBIT",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})

	it("modulr card,VISA_DEBIT_CORPORATE EUR", async () => {
		const resp = await client?.auth.login({
			username: process.env.username ?? "user",
			password: process.env.password ?? "password",
		})
		if (ErrorResponse.is(resp)) {
			return new Error(resp.errors?.[0].message ?? "error")
		}

		const createCardRequest: model.CreateCardRequest = {
			cardType: {
				cardTypeId: "VISA_DEBIT_CORPORATE",
			},
			providerAccountId: "A120C7V8",
			currency: "EUR",
			providerCode: "modulr",
			balance: 1,
			friendlyName: resp?.trackingId + "VISA_DEBIT_CORPORATE" + "EUR",
		}

		const card = await client?.cards.create(createCardRequest)
		expect(card).toMatchObject({
			cardType: "VISA_DEBIT_CORPORATE",
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: 1,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: "modulr",
			usage: "SINGLE_USE_ALLOW_TEST_AUTH",
			createdBy: expect.any(String),
		})
	})
})

/*function legacyAsserts:(request: model.CreateCardRequest, response: model.CardResponse ) {
		return (
        assertEquals(request.cardType.cardTypeId, response.cardType.cardTypeId);
        assertEquals(request.getCardType().getCardTypeId(), response.getUseAs());
        assertNotNull(response.getNameOnCard());
        assertTrue(response.getCardNumber().matches("\\d{16}"));
        assertTrue(response.getCvv().matches("\\d{3}"));
        assertEquals(LocalDate.now(), response.getIssueDate());
        assertTrue(response.getExpiryDate().isAfter(LocalDate.now()));
        assertBigDecimalEquals(BigDecimal.ONE, response.getBalance());
        assertBigDecimalEquals(BigDecimal.ONE, response.getFundingBalance());
        assertBigDecimalEquals(BigDecimal.ONE, response.getRemainingBalance());
        assertEquals(CardForm.GENERATABLE, response.getCardForm());
        assertEquals(Usage.SINGLE_USE, response.getUsage());
        assertEquals(request.getProviderCode(), response.getProviderCode());
        assertNotNull(response.getProviderCardId());
        assertEquals(response.getProviderCardId(), response.getCardAccount().getProviderAccountId());
        assertEquals(request.getProviderAccountId(), response.getFundingAccount().getProviderAccountId());
        assertNotNull(response.getFundingAccount().getBalance());
        assertEquals(response.getCreatedBy(), MPayContext.ensureUserContext().getUsername());
		)
    } */

/* v2Asserts(final CreateCardRequest request, final CardResponseV2 response) {
        assertEquals(request.getCardType().getCardTypeId(), response.getCardType().getCardTypeId());
        assertNotNull(response.getCardType().getDescription());
        assertTrue(response.getCardNumber().matches("\\d{16}"));
        assertTrue(response.getCvv().matches("\\d{3}"));
        assertEquals(LocalDate.now(), response.getIssueDate());
        assertTrue(response.getExpiryDate().isAfter(YearMonth.now()));
        assertBigDecimalEquals(BigDecimal.ONE, response.getBalance());
        assertEquals(Usage.SINGLE_USE, response.getUsage());
        assertEquals(request.getProviderCode(), response.getProviderCode());
        assertNotNull(response.getProviderCardId());
        assertEquals(request.getProviderAccountId(), response.getFundingAccount().getProviderAccountId());
        assertNotNull(response.getFundingAccount().getBalance());
        assertEquals(response.getCreatedBy(), MPayContext.ensureUserContext().getUsername());
    } */

/*
4:41
"message": "Provider Error. Response code: WEX-DAT-0011 No cards available."
4:41
wex suck
4:41
some of their stuff doesnt work on test

4:41
pretty much
4:42
"message": "Logical Error: Card Creation Failed -"
4:42
no idea on that one, everything looks correct your end
4:42
try different funding accs for that? skip if it still doesnt like it


if (provider === "modulr") {
											cardResponse = await new Promise(resolve => {
												setTimeout(() => {
													console.log("waiting")
													resolve(client?.cards.create(createCardRequest))
												}, 10000)
											})

*/

/* skip these? 

0RACStIAXajquRcF7lGxlfQNq
*/
