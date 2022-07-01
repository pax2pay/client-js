import assert from "assert"
import * as pax2pay from "../../../index"
import { ErrorResponse } from "../../../model"
import * as model from "../../../model"
import { Card } from "../../Card"

export async function actionTest(card: Card & model.Card.CardResponse, client: pax2pay.Client) {
	assert(card.providerCardId && card.providerCode)
	assert(card.fundingAccount)

	const amendedCard = await card.amend({
		newBalance: 2,
		currency: card.fundingAccount.currency,
	})
	const amendedActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

	assert(!(ErrorResponse.is(amendedActualCard) || ErrorResponse.is(amendedCard)))

	expect(amendedCard).toMatchObject({ balance: 2 })
	expect(amendedActualCard).toMatchObject({ balance: 2 })

	const frozenCard = await card.freeze()
	const frozenActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

	assert(!(ErrorResponse.is(frozenActualCard) || ErrorResponse.is(frozenCard)))

	expect(frozenCard).toMatchObject({ state: "INACTIVE" })
	expect(frozenActualCard).toMatchObject({ state: "INACTIVE" })

	const thawedCard = await card.thaw()
	const thawedActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

	assert(!(ErrorResponse.is(thawedActualCard) || ErrorResponse.is(thawedCard)))

	expect(thawedCard).toMatchObject({ state: "ACTIVE" })
	expect(thawedActualCard).toMatchObject({ state: "ACTIVE" })

	const cancelledCard = await card.cancel()
	const cancelledActualCard = await client?.cards.getCard(card.providerCardId, card.providerCode)

	assert(!(ErrorResponse.is(cancelledActualCard) || ErrorResponse.is(cancelledCard)))

	expect(cancelledCard).toMatchObject({ state: "DELETED" })
	expect(cancelledActualCard).toMatchObject({ state: "DELETED" })
}
