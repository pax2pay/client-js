import { Currency } from "isoly"
import { CardDeliveryEmailConfig } from "./CardDeliveryEmailConfig"
import { CardTypesConfig } from "./CardTypesConfig"
import { FundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { FundingLimitConfig } from "./FundingLimitConfig"
import { ProviderCode } from "./ProviderCode"
/**
 * Organisation config, optional
 */
export interface OrganisationConfig {
	showDefaultRolesets?: boolean
	defaultModulrUsage?: "SINGLE_USE" | "SINGLE_USE_ALLOW_TEST_AUTH" | "MULTIPLE_USE"
	defaultExpiryMonthDelta?: number
	defaultExpiryMonthDeltaPerCurrency?: Partial<Record<Currency, number>>
	defaultPortalCardType?: Partial<Record<ProviderCode, string>>
	defaultPortalFundingAccount?: Partial<Record<ProviderCode, string>>
	cardTypes?: CardTypesConfig
	inboundTransferConfig?: FundingAccountInboundTransferNotificationConfig
	fundingLimitConfig?: FundingLimitConfig
	cardDeliveryEmailConfig?: CardDeliveryEmailConfig
}

export namespace OrganisationConfig {
	export function is(value: OrganisationConfig | any): value is OrganisationConfig {
		return (
			value == undefined ||
			(typeof value == "object" &&
				(value.defaultModulrUsage == undefined ||
					value.defaultModulrUsage == "SINGLE_USE" ||
					value.defaultModulrUsage == "SINGLE_USE_ALLOW_TEST_AUTH" ||
					value.defaultModulrUsage == "MULTIPLE_USE"))
		)
	}
}
