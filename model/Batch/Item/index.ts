import { DateTime } from "isoly"
import { isly } from "isly"
import { PaymentResponse } from "../../PaymentResponse"
import { Type } from "../Type"
import { PaymentTask as IPaymentTask } from "./PaymentTask"
import { RebateTask as IRebateTask } from "./RebateTask"
import { Request as IRequest } from "./Request"
import { Status as IStatus } from "./Status"

export interface Item<T = unknown, R = unknown> {
	id: string
	type: Type
	status: IStatus
	errorMessage?: string
	task?: T
	result?: R
	reference?: string
	createdOn?: DateTime
	createdBy?: string
	updatedOn?: DateTime
	updatedBy?: string
}

export namespace Item {
	export import Status = IStatus
	export import RebateTask = IRebateTask
	export import PaymentTask = IPaymentTask
	export import Request = IRequest
	export type Rebate = Item<IRebateTask, PaymentResponse>
	export type Payment = Item<IPaymentTask, PaymentResponse>
	export const baseType = isly.object<Item<unknown, unknown>>({
		id: isly.string(),
		type: Type.type,
		status: IStatus.type,
		errorMessage: isly.string().optional(),
		task: isly.any().optional(),
		result: isly.any().optional(),
		reference: isly.string().optional(),
		createdOn: isly.fromIs("DateTime", DateTime.is).optional(),
		createdBy: isly.string().optional(),
		updatedOn: isly.fromIs("DateTime", DateTime.is).optional(),
		updatedBy: isly.string().optional(),
	})
	export const is = baseType.is
	export namespace Rebate {
		export const type = baseType.extend<Item<IRebateTask, PaymentResponse>>({
			task: IRebateTask.type.optional(),
			result: PaymentResponse.type.optional(),
		})
		export const is = type.is
	}
	export namespace Payment {
		export const type = baseType.extend<Item<IPaymentTask, PaymentResponse>>({
			task: IPaymentTask.type.optional(),
			result: PaymentResponse.type.optional(),
		})
		export const is = type.is
	}
}
