export interface MerchantSearchRequest {
	partialName?: string
	name?: string
	status?: ("ACTIVE" | "DELETED")[]
	restrictable?: boolean
	isDefault?: boolean
	assigned?: boolean
	own?: boolean
	used?: boolean
}
