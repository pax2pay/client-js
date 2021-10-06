import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import * as model from "../../../model"
import { Card } from "../../Card"

export async function actionTest(card: Card & model.CardResponse, client: pax2pay.Client) {
	if (!card.providerCardId || !card.providerCode)
		throw Error("Card id or provider code missing.")
	else if (!card.fundingAccount)
		throw Error("Funding account missing.")
	else {
		const amendedCard = await card.amend({
			newBalance: 2,
			currency: card.fundingAccount.currency,
		})
		const amendedActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

		if (ErrorResponse.is(amendedActualCard) || ErrorResponse.is(amendedCard))
			throw Error("Error after amending card")
		else {
			expect(amendedCard).toMatchObject({ balance: 2 })
			expect(amendedActualCard).toMatchObject({ balance: 2 })

			const frozenCard = await card.freeze()
			const frozenActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

			if (ErrorResponse.is(frozenActualCard) || ErrorResponse.is(frozenCard))
				throw Error("Error after freezing card")
			else {
				expect(frozenCard).toMatchObject({ state: "INACTIVE" })
				expect(frozenActualCard).toMatchObject({ state: "INACTIVE" })

				const thawedCard = await card.thaw()
				const thawedActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

				if (ErrorResponse.is(thawedActualCard) || ErrorResponse.is(thawedCard))
					throw Error("Error after thawing card")
				else {
					expect(thawedCard).toMatchObject({ state: "ACTIVE" })
					expect(thawedActualCard).toMatchObject({ state: "ACTIVE" })

					const cancelledCard = await card.cancel()
					const cancelledActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

					if (ErrorResponse.is(cancelledActualCard) || ErrorResponse.is(cancelledCard))
						throw Error("Error after cancelling card")
					else {
						expect(cancelledCard).toMatchObject({ state: "DELETED" })
						expect(cancelledActualCard).toMatchObject({ state: "DELETED" })
					}
				}
			}
		}
	}
}
