import { isly } from "isly"
import { CardAmendmentScheduledTaskResponse } from "./CardAmendmentScheduledTaskResponse"
import { CardStateChangeScheduledTaskResponse } from "./CardStateChangeScheduledTaskResponse"

export type CardScheduleResponseItem = CardAmendmentScheduledTaskResponse | CardStateChangeScheduledTaskResponse
export namespace CardScheduleResponseItem {
	export const type = isly.union<CardScheduleResponseItem>(
		CardAmendmentScheduledTaskResponse.type,
		CardStateChangeScheduledTaskResponse.type
	)
	export const is = type.is
}
