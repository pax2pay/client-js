import { isly } from "isly"
import { Base } from "./Base"

export interface Scan extends Base {
	type: "SCAN"
	accountNumber: string
	sortCode: string
}

export namespace Scan {
	export const type = Base.type.extend<Scan>({
		type: isly.string("SCAN"),
		accountNumber: isly.string(),
		sortCode: isly.string(),
	})
	export const is = type.is
}
