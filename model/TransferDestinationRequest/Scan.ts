import { isly } from "isly"
import { Base } from "./Base"

export interface Scan extends Base {
	accountNumber: string
	sortCode: string
}

export namespace Scan {
	export const type = Base.type.extend<Scan>({
		accountNumber: isly.string(),
		sortCode: isly.string(),
	})
	export const is = type.is
}
