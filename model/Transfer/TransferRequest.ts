import * as isoly from "isoly"
import { ProviderCode } from "../ProviderCode"
import { NonBeneficiaryTransferDestination } from "./NonBeneficiaryTransferDestination"

export interface TransferRequest {
	providerCode: ProviderCode
	providerSourceAccountId: string
	beneficiaryId?: string
	destination?: NonBeneficiaryTransferDestination
	destinationProviderAccountId?: string
	amount: number
	currency?: isoly.Currency
	reference?: string
	paymentDate?: string
}
