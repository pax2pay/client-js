import { isly } from "isly"

export interface TransferResponseV3 {
	beneficiary?: string
	reference: string
	providerTransferId: string
}
export namespace TransferResponseV3 {
	export const type = isly.object<TransferResponseV3>({
		beneficiary: isly.string().optional(),
		reference: isly.string(),
		providerTransferId: isly.string(),
	})
	export const is = type.is
}
