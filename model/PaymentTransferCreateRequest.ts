import { isly } from "isly"

export interface PaymentTransferCreateRequest {
	beneficiary?: string
	reference?: string
	verificationOfPayeeId?: string
}
export namespace PaymentTransferCreateRequest {
	export const type = isly.object<PaymentTransferCreateRequest>({
		beneficiary: isly.string().optional(),
		reference: isly.string().optional(),
		verificationOfPayeeId: isly.string().optional(),
	})
	export const is = type.is
}
