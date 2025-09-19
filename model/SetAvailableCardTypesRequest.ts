import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"

export interface SetAvailableCardTypesRequest {
	cardTypes: CardTypeSpecification[]
}

export namespace SetAvailableCardTypesRequest {
	export const type = isly.object<SetAvailableCardTypesRequest>({
		cardTypes: isly.array(CardTypeSpecification.type),
	})
	export const is = type.is
}
