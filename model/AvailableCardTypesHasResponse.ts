import { isly } from "isly"
import { AvailableCardTypesResponse } from "./AvailableCardTypesResponse"

export interface AvailableCardTypesHasResponse extends AvailableCardTypesResponse {
	name: string
}

export namespace AvailableCardTypesHasResponse {
	export const type = AvailableCardTypesResponse.type.extend<AvailableCardTypesHasResponse>({
		name: isly.string(),
	})
}
