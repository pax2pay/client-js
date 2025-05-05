import { isly } from "isly"
import { ScheduledTaskResponse } from "./ScheduledTaskResponse"

export interface CardAmendmentScheduledTaskResponse extends ScheduledTaskResponse {
	taskType: "CARD_AMENDMENT"
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}

export namespace CardAmendmentScheduledTaskResponse {
	export const type = ScheduledTaskResponse.type.extend<CardAmendmentScheduledTaskResponse>({
		taskType: isly.string("CARD_AMENDMENT"),
		newBalance: isly.number().optional(),
		balanceDifferential: isly.number().optional(),
		remainingBalance: isly.number().optional(),
	})
	export const is = type.is
}
