import { CardUsage } from "../Card/CardUsage"
import { CardDeliveryEmailConfig } from "./CardDeliveryEmailConfig"
import { CardTypesConfig } from "./CardTypesConfig"
import { FundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { FundingLimitConfig } from "./FundingLimitConfig"

/**
 * Organisation config, optional
 */
export interface OrganisationConfig {
	showDefaultRolesets?: boolean
	cardTypes?: CardTypesConfig
	inboundTransferConfig?: FundingAccountInboundTransferNotificationConfig
	defaultModulrUsage?: CardUsage
	defaultExpiryMonthDelta?: number
	fundingLimitConfig?: FundingLimitConfig
	cardDeliveryEmailConfig?: CardDeliveryEmailConfig
}

export namespace OrganisationConfig {
	export function is(value: OrganisationConfig | any): value is OrganisationConfig {
		return (
			typeof value == "object" &&
			(value.showDefaultRolesets == undefined || typeof value.showDefaultRolesets == "boolean") &&
			(value.cardTypes == undefined || CardTypesConfig.is(value.cardTypes)) &&
			(value.inboundTransferConfig == undefined ||
				FundingAccountInboundTransferNotificationConfig.is(value.inboundTransferConfig)) &&
			(value.defaultModulrUsage == undefined || CardUsage.is(value.defaultModulrUsage)) &&
			(value.defaultExpiryMonthDelta == undefined || typeof value.defaultExpiryMonthDelta == "number") &&
			(value.fundingLimitConfig == undefined || FundingLimitConfig.is(value.fundingLimitConfig)) &&
			(value.cardDeliveryEmailConfig == undefined || CardDeliveryEmailConfig.is(value.cardDeliveryEmailConfig))
		)
	}
}
