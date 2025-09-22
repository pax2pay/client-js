import { isly } from "isly"
import { CardTypeResponse } from "./CardTypeResponse"

export interface AvailableCardTypesResponse {
	cardTypes: CardTypeResponse[]
}

export namespace AvailableCardTypesResponse {
	export const type = isly.object<AvailableCardTypesResponse>({
		cardTypes: isly.array(CardTypeResponse.type),
	})
	export const is = type.is
}
