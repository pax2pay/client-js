import { CardTypeProfileStatus } from "./CardTypeProfileStatus"
import { CardTypeSpecification } from "./CardTypeSpecification"
import { Inclusion } from "./Inclusion"
import { ProviderCode } from "./ProviderCode"

export interface SearchCardTypeProfileRequest {
	cardTypeProfileId?: string
	description?: string
	providerCode?: ProviderCode
	includesDefaults?: Inclusion
	containsCardTypes?: CardTypeSpecification[]
	exactMatch?: boolean
	doesNotContainCardTypes?: CardTypeSpecification[]
	includeShared?: Inclusion
	statuses?: CardTypeProfileStatus[]
}
