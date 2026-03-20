import { isly } from "isly"
import { PaymentRequest } from "../../PaymentRequest"

export interface PaymentTask {
	request: PaymentRequest
}

export namespace PaymentTask {
	export const type = isly.object<PaymentTask>({
		request: isly.fromIs("PaymentRequest", PaymentRequest.is),
	})
}
