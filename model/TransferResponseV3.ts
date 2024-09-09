import { isly } from "isly"

export interface TransferResponseV3 {
	beneficiary: string
	reference: string
}
export namespace TransferResponseV3 {
	export const type = isly.object<TransferResponseV3>({
		beneficiary: isly.string(),
		reference: isly.string(),
	})
	export const is = type.is
}
