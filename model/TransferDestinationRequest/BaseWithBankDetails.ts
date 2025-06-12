import { isly } from "isly"
import { Base } from "./Base"

export interface BaseWithBankDetails extends Base {
	bankCountry?: string
	bankName?: string
}

export namespace BaseWithBankDetails {
	export const type = Base.type.extend<BaseWithBankDetails>({
		bankCountry: isly.string().optional(),
		bankName: isly.string().optional(),
	})
}
