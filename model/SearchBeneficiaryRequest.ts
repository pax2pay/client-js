import { Currency } from "isoly"
import { BeneficiaryStatus } from "./BeneficiaryStatus"

export interface SearchBeneficiaryRequest {
	defaultReference?: string
	currency?: Currency[]
	type?: "SCAN" | "IBAN"
	status?: BeneficiaryStatus[]
	name?: string
	fullName?: string
	fuzzySearch?: string
}
