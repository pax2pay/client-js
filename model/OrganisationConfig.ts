import { Currency } from "isoly"
import { isly } from "isly"
import { ApprovalNotificationConfig } from "./ApprovalNotificationConfig"
import { CardDeliveryEmailConfig } from "./CardDeliveryEmailConfig"
import { CardTypesConfig } from "./CardTypesConfig"
import { CardUsage } from "./CardUsage"
import { FundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { FundingLimitConfig } from "./FundingLimitConfig"
import { ProviderCode } from "./ProviderCode"
import { SecurityConfig } from "./SecurityConfig"
/**
 * Organisation config, optional
 */
export interface OrganisationConfig {
	showDefaultRolesets?: boolean
	defaultModulrUsage?: CardUsage
	defaultExpiryMonthDelta?: number
	defaultExpiryMonthDeltaPerCurrency?: Partial<Record<Currency, number>>
	defaultPortalCardType?: Partial<Record<ProviderCode, string>>
	defaultPortalFundingAccount?: Partial<Record<ProviderCode, string>>
	cardTypes?: CardTypesConfig
	inboundTransferConfig?: FundingAccountInboundTransferNotificationConfig
	approvalNotificationConfig?: ApprovalNotificationConfig
	fundingLimitConfig?: FundingLimitConfig
	cardDeliveryEmailConfig?: CardDeliveryEmailConfig
	portalHideMultipleUseOption?: boolean
	securityConfig?: SecurityConfig
}

export namespace OrganisationConfig {
	const currencyType = isly.fromIs<Currency>("Currency", Currency.is)
	export const type = isly.object<OrganisationConfig>({
		showDefaultRolesets: isly.boolean().optional(),
		defaultModulrUsage: CardUsage.type.optional(),
		defaultExpiryMonthDelta: isly.number().optional(),
		defaultExpiryMonthDeltaPerCurrency: isly.record(currencyType, isly.number()).optional(),
		defaultPortalCardType: isly.record(ProviderCode.type, isly.string()).optional(),
		defaultPortalFundingAccount: isly.record(ProviderCode.type, isly.string()).optional(),
		cardTypes: CardTypesConfig.type.optional(),
		inboundTransferConfig: FundingAccountInboundTransferNotificationConfig.type.optional(),
		approvalNotificationConfig: ApprovalNotificationConfig.type.optional(),
		fundingLimitConfig: FundingLimitConfig.type.optional(),
		cardDeliveryEmailConfig: CardDeliveryEmailConfig.type.optional(),
		portalHideMultipleUseOption: isly.boolean().optional(),
		securityConfig: SecurityConfig.type.optional(),
	})
	export const is = type.is
}
