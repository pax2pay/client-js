import { isly } from "isly"
import { PaymentResponse } from "../../PaymentResponse"
import { Type } from "../Type"
import { RebateTask as IRebateTask } from "./RebateTask"
import { Status as IStatus } from "./Status"

export interface Item<T = unknown, R = unknown> {
	type: Type
	status: IStatus
	errorMessage?: string
	task?: T
	result?: R
}

export namespace Item {
	export import Status = IStatus
	export import RebateTask = IRebateTask
	export type Rebate = Item<IRebateTask, PaymentResponse>
	export const baseType = isly.object<Item<unknown, unknown>>({
		type: Type.type,
		status: IStatus.type,
		errorMessage: isly.string().optional(),
		task: isly.any().optional(),
		result: isly.any().optional(),
	})
	export namespace Rebate {
		export const type = baseType.extend<Item<IRebateTask, PaymentResponse>>({
			task: IRebateTask.type.optional(),
			result: PaymentResponse.type.optional(),
		})
	}
}
