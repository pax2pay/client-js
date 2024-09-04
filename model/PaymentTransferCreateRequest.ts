import { isly } from "isly"

export interface PaymentTransferCreateRequest {
	beneficiary: string
	reference?: string
}
export namespace PaymentTransferCreateRequest {
	export const type = isly.object<PaymentTransferCreateRequest>({
		beneficiary: isly.string(),
		reference: isly.string().optional(),
	})
	export const is = type.is
}
