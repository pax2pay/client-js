import { CardDeliveryEmailConfig } from "./CardDeliveryEmailConfig"
import { CardTypesConfig } from "./CardTypesConfig"
import { FundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { FundingLimitConfig } from "./FundingLimitConfig"
/**
 * Organisation config, optional
 */
export interface OrganisationConfig {
	showDefaultRolesets?: boolean
	defaultModulrUsage?: "SINGLE_USE" | "SINGLE_USE_ALLOW_TEST_AUTH" | "MULTIPLE_USE"
	defaultExpiryMonthDelta?: number
	cardTypes?: CardTypesConfig
	inboundTransferConfig?: FundingAccountInboundTransferNotificationConfig
	fundingLimitConfig?: FundingLimitConfig
	cardDeliveryEmailConfig?: CardDeliveryEmailConfig
}
