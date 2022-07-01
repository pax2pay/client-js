import { CardTypesConfig } from "./CardTypesConfig"
import { FundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"

/**
 * Organisation config, optional
 */
export interface OrganisationConfig {
	showDefaultRolesets?: boolean
	cardTypes?: CardTypesConfig
	inboundTransferConfig?: FundingAccountInboundTransferNotificationConfig
}
