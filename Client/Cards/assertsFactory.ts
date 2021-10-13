import * as dotenv from "dotenv"
import { mathExact } from "math-exact";
import * as model from "../../model";

dotenv.config()

const v2Assert: model.CardResponseV2 = {
	cardType: expect.any(String),
	cardNumber: expect.stringMatching(/(\d{16})|(\d{6}\*{6}\d{4})/),
	cvv: expect.stringMatching(/(\d{3})|(\*{3})/),
	expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
	nameOnCard: expect.any(String),
	balance: expect.any(Number),
	issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
	providerCardId: expect.any(String),
	providerCode: expect.any(String),
	usage: expect.stringMatching(/(SINGLE_USE_ALLOW_TEST_AUTH)|(SINGLE_USE)/),
	createdBy: process.env.username,
}
		
const legacyAssert: model.CardResponse = {
	cardType: expect.any(String),
	cardNumber: expect.stringMatching(/(\d{16})|(\d{6}\*{6}\d{4})|(\d|\*){16}/),
	cvv: expect.stringMatching(/(\d{3})|(\*{3})/),
	expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
	nameOnCard: expect.any(String),
	balance: expect.any(Number),
	issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
	providerCardId: expect.any(String),
	providerCode: expect.any(String),
	usage: expect.stringMatching(/(SINGLE_USE_ALLOW_TEST_AUTH)|(SINGLE_USE)|(MULTIPLE_USE)/),
	createdBy: expect.any(String),
	cardForm: expect.stringMatching(/(GENERATABLE)|(PHYSICAL)/),
	state: expect.stringMatching(/(ACTIVE)|(DELETED)|(EXPIRED)/),
	cardAccount: {
		id: expect.any(Number),
		providerAccountId: expect.any(String),
		provider: expect.objectContaining({ id: expect.any(Number), code: expect.any(String), name: expect.any(String), status: 'ACTIVE' }),
		organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' },
		currency: expect.any(String),
		state: expect.stringMatching(/(ACTIVE)|(DELETED)|(EXPIRED)/),
		friendlyName: expect.any(String),
		balance: expect.any(Number),
		accountType: 'CARD',
		updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?/),
		createdOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?/),
	},
	creatingSystem: expect.any(String),
}

export function assertsFactoryCard(card: model.CreateCardRequest): [model.CardResponseV2, model.CardResponse] {

	const expectedLegacy = {
		...legacyAssert,
		cardType: card.cardType.cardTypeId,
		balance: card.providerCode == "modulr" ? mathExact("Add", card.balance, 2) : card.balance,
		issueDate: new Date().toISOString().slice(0,10),
		providerCode: card.providerCode,
		usage: card.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" as model.CardUsage : "SINGLE_USE",
		remainingBalance: card.providerCode == "modulr" ? mathExact("Add", card.balance, 2) : card.balance,
		cardAccount: {
			id: expect.any(Number),
			providerAccountId: expect.any(String),
			organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' as ("ACTIVE" | "DELETED")},
			state: expect.stringMatching(/(ACTIVE)|(DELETED)|(EXPIRED)/),
			friendlyName: expect.any(String),
			accountType: 'CARD' as ("CARD" | "FUNDING"),
			updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?/),
			createdOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?/),
			provider: { id: expect.any(Number), code: card.providerCode, name: expect.any(String), status: "ACTIVE" as ("ACTIVE" | "INACTIVE" | "DELETED")},
			currency: card.currency,
			balance: card.providerCode == "modulr" ? mathExact("Add", card.balance, 2) : card.balance,
		},
		fundingAccount: {
			id: expect.any(Number),
			providerAccountId: expect.any(String),
			organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' as ("ACTIVE" | "DELETED")},
			state: expect.stringMatching(/(ACTIVE)|(DELETED)/),
			friendlyName: expect.any(String),
			balance: expect.any(Number),
			accountType: 'FUNDING' as ("CARD" | "FUNDING"),
			updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?/),
			provider: { id: expect.any(Number), code: card.providerCode, name: expect.any(String), status: "ACTIVE" as ("ACTIVE" | "INACTIVE" | "DELETED")},
			currency: card.currency,
		},
	}

	const expectedV2 = {
		...v2Assert,
		cardType: card.cardType.cardTypeId,
		balance: card.providerCode == "modulr" ? mathExact("Add", card.balance, 1) : card.balance,
		issueDate: new Date().toISOString().slice(0,10),
		providerCode: card.providerCode,
		usage: card.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" as model.CardUsage : "SINGLE_USE",
	}

	return [expectedV2, expectedLegacy]
}

export function assertsFactoryGeneric(): [model.CardResponseV2, model.CardResponse] {
	return [v2Assert, legacyAssert]
}
