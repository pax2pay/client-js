import * as model from "../../../model"

export function factory(card: Partial<model.CreateCardRequest>): [model.CreateCardRequest, any, any] {
	const result: model.CreateCardRequest = {
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
		result,
		{
			cardType: result.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: result.balance,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: result.providerCode,
			usage: result.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: expect.any(String),
		},
		{
			cardType: result.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
			balance: result.balance,
			issueDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
			providerCardId: expect.any(String),
			providerCode: result.providerCode,
			usage: result.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: expect.any(String),
			remainingBalance: result.balance,
			cardForm: "GENERATABLE",
			state: "ACTIVE",
			cardAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
        provider: expect.objectContaining({ id: expect.any(Number), code: result.providerCode, name: expect.any(String), status: 'ACTIVE' }),
        organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' },
        currency: result.currency,
        state: 'ACTIVE',
        friendlyName: expect.any(String),
        balance: result.balance,
        accountType: 'CARD',
        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
        createdOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
			},
			fundingAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
        provider: { id: expect.any(Number), code: result.providerCode, name: expect.any(String), status: 'ACTIVE' },
        organisation: { code: expect.any(String), name: expect.any(String), status: 'ACTIVE' },
        currency: result.currency,
        state: 'ACTIVE',
        friendlyName: expect.any(String),
        balance: expect.any(Number),
        accountType: 'FUNDING',
        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/)
			},
			creatingSystem: expect.any(String),

		},
	]
}
