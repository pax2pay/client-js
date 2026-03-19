import { isly } from "isly"
import { PaymentRequest } from "../../PaymentRequest"

export interface PaymentTask {
	reference?: string
	request: PaymentRequest
}

export namespace PaymentTask {
	export const type = isly.object<PaymentTask>({
		reference: isly.string().optional(),
		request: isly.fromIs("PaymentRequest", PaymentRequest.is),
	})
}
