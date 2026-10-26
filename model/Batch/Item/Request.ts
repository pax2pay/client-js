import { isly } from "isly"
import { PaymentRequest } from "../../PaymentRequest"

// PaymentBatchItemRequest in mpay-server, the only kind of BatchItemRequest yet
/** An item of a payment batch: the same request as creating a single payment, with a reference */
export interface Request extends PaymentRequest {
	/** For a transfer, the transfer's reference too: give it here or as transfer.reference, and if both, they must match */
	reference?: string
}

export namespace Request {
	export const type = PaymentRequest.type.extend<Request>({
		reference: isly.string().optional(),
	})
	export const is = type.is
}
