import { ScheduledTaskResponse } from "./ScheduledTaskResponse"

export interface CardAmendmentScheduledTaskResponse extends ScheduledTaskResponse {
	taskType: "CARD_AMENDMENT"
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}

export namespace CardAmendmentScheduledTaskResponse {
	export function is(value: CardAmendmentScheduledTaskResponse | any): value is CardAmendmentScheduledTaskResponse {
		return (
			typeof value == "object" &&
			value.taskType == "CARD_AMENDMENT" &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number")
		)
	}
}
