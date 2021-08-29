import { ProviderCode } from "./ProviderCode"

export interface AccountSearchRequest {
	friendlyName?: string
	providerCodes?: ProviderCode[]
	currency?: string
	accountState?:
		| "ACTIVE"
		| "INACTIVE"
		| "CLOSED"
		| "DELETED"
		| "EXPIRED"
		| "PENDING"
		| "APPROVED"
		| "DECLINED"
		| "GENERATED"
	providerAccountId?: string
}
