import * as model from "../../../model"

export function factory(card: Partial<model.CreateCardRequest>): model.CreateCardRequest {
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

	return result
}
