import { mathExact } from "math-exact"
import * as model from "../../../model"

export function factory(card: Partial<model.CreateCardRequest>): [model.CreateCardRequest, model.CardResponseV2, model.CardResponse] {
	const request: model.CreateCardRequest = {
		cardType: {
			cardTypeId: "VISA_DEBIT_CORPORATE",
		},
		providerAccountId: "AAAAAAA",
		providerCode: "modulr",
		balance: 1,
		currency: "EUR",
		friendlyName: "test card",
		...card,
	}
	return [
		request,
		{
			cardType: request.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: request.providerCode == "modulr" ? mathExact("Add", request.balance, 1) : request.balance,
			issueDate: new Date().toISOString().slice(0,10),
			providerCardId: expect.any(String),
			providerCode: request.providerCode,
			usage: request.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: process.env.username,
		},
		{
			cardType: request.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: request.providerCode == "modulr" ? mathExact("Add", request.balance, 2) : request.balance,
			issueDate: new Date().toISOString().slice(0,10),
			providerCardId: expect.any(String),
			providerCode: request.providerCode,
			usage: request.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: expect.any(String),
			remainingBalance: request.providerCode == "modulr" ? mathExact("Add", request.balance, 2) : request.balance,
			cardForm: "GENERATABLE",
			state: "ACTIVE",
			cardAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
        provider: expect.objectContaining({ id: expect.any(Number), code: request.providerCode, name: expect.any(String), status: 'ACTIVE' }),
        organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' },
        currency: request.currency,
        state: 'ACTIVE',
        friendlyName: expect.any(String),
        balance: request.providerCode == "modulr" ? mathExact("Add", request.balance, 2) : request.balance,
        accountType: 'CARD',
        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
        createdOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
			},
			fundingAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
        provider: { id: expect.any(Number), code: request.providerCode, name: expect.any(String), status: 'ACTIVE' },
        organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' },
        currency: request.currency,
        state: 'ACTIVE',
        friendlyName: expect.any(String),
        balance: expect.any(Number),
        accountType: 'FUNDING',
        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
			},
			creatingSystem: expect.any(String),
		},
	]
}
