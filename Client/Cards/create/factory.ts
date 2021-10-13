import { mathExact } from "math-exact"
import * as model from "../../../model"
import { assertsFactoryCard } from "../assertsFactory"

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

	const asserts = assertsFactoryCard(request)
	return [request, ...asserts]
}
