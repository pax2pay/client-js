import { isly } from "isly"
import { BasePaymentResponse } from "./BasePaymentResponse"
import { CardResponseV3 } from "./CardResponseV3"
import { PaymentOperation } from "./PaymentOperation"
import { TransferResponseV3 } from "./TransferResponseV3"
export interface PaymentResponse extends BasePaymentResponse {
	card?: CardResponseV3
	transfer?: TransferResponseV3
	operations?: PaymentOperation[]
}
export namespace PaymentResponse {
	export const type = BasePaymentResponse.type.extend<PaymentResponse>({
		card: isly.fromIs("CardResponseV3", CardResponseV3.is).optional(),
		transfer: isly.fromIs("TransferResponseV3", TransferResponseV3.is).optional(),
		operations: isly.array(PaymentOperation.type).optional(),
	})
	export const is = type.is
}
