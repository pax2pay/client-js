import { isly } from "isly"
import { PaymentRequest } from "../../PaymentRequest"

// BatchItemRequest in mpay-server
export interface Request {
	reference?: string
	/** For a payment batch: the same request as creating a single payment */
	payment?: PaymentRequest
}

export namespace Request {
	export const type = isly.object<Request>({
		reference: isly.string().optional(),
		payment: isly.fromIs("PaymentRequest", PaymentRequest.is).optional(),
	})
	export const is = type.is
}
