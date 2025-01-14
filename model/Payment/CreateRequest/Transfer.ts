import { isly } from "isly"

export interface Transfer {
	beneficiary?: string
	reference?: string
}
export namespace Transfer {
	export const type = isly.object<Transfer>({
		beneficiary: isly.string().optional(),
		reference: isly.string().optional(),
	})
	export const is = type.is
}
