import { isly } from "isly"
import { BaseWithBankDetails } from "./BaseWithBankDetails"

export interface Iban extends BaseWithBankDetails {
	iban: string
	bic?: string
}

export namespace Iban {
	export const type = BaseWithBankDetails.type.extend<Iban>({
		iban: isly.string(),
		bic: isly.string().optional(),
	})
	export const is = type.is
}
