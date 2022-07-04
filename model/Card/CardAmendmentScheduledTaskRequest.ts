import { ScheduledTaskRequest } from "./ScheduledTaskRequest"

export interface CardAmendmentScheduledTaskRequest extends ScheduledTaskRequest {
	taskType: "CARD_AMENDMENT"
	newBalance?: number
	balanceDifferential?: number
	remainingBalance?: number
}

export namespace CardAmendmentScheduledTaskRequest {
	export function is(value: CardAmendmentScheduledTaskRequest | any): value is CardAmendmentScheduledTaskRequest {
		return (
			typeof value == "object" &&
			value.taskType == "CARD_AMENDMENT" &&
			(value.newBalance == undefined || typeof value.newBalance == "number") &&
			(value.balanceDifferential == undefined || typeof value.balanceDifferential == "number") &&
			(value.remainingBalance == undefined || typeof value.remainingBalance == "number")
		)
	}
}
