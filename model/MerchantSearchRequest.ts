export interface MerchantSearchRequest {
	partialName?: string
	name?: string
	isSuitableForCardMerchantRestriction?: boolean
	status?: ("ACTIVE" | "DELETED")[]
	isDefault?: boolean
	lockable?: boolean
	used?: boolean
}
