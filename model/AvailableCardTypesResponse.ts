import { isly } from "isly"
import { CardTypeSpecification } from "./CardTypeSpecification"

export interface AvailableCardTypesResponse {
	cardTypes: CardTypeSpecification[]
}

export namespace AvailableCardTypesResponse {
	export const type = isly.object<AvailableCardTypesResponse>({
		cardTypes: isly.array(CardTypeSpecification.type),
	})
	export const is = type.is
}
