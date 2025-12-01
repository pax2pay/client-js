import { Currency } from "isoly"
import { isly } from "isly"
import { ProviderCode } from "../ProviderCode"
import { Usage } from "../Usage"
import { Types } from "./Types"
/**
 * Organisation config, optional
 */
export interface Organisation {
	showDefaultRolesets?: boolean
	defaultModulrUsage?: Usage
	defaultExpiryMonthDelta?: number
	defaultExpiryMonthDeltaPerCurrency?: Partial<Record<Currency, number>>
	defaultPortalCardType?: Partial<Record<ProviderCode, string>>
	defaultPortalFundingAccount?: Partial<Record<ProviderCode, string>>
	cardTypes?: Types.CardTypes
	inboundTransferConfig?: Types.FundingAccountInboundTransferNotification
	approvalNotificationConfig?: Types.ApprovalNotification
	fundingLimitConfig?: Types.FundingLimit
	cardDeliveryEmailConfig?: Types.CardDeliveryEmail
	portalHideMultipleUseOption?: boolean
	securityConfig?: Types.Security
	fraudEmailConfig?: Types.FraudEmail
	sso?: Partial<Record<Types.SsoProvider.Type, Types.SsoProvider>>
	forcedSettlementNotificationConfig?: Types.ForcedSettlementNotification
}

export namespace Organisation {
	const currencyType = isly.fromIs<Currency>("Currency", Currency.is)
	export const type = isly.object<Organisation>({
		showDefaultRolesets: isly.boolean().optional(),
		defaultModulrUsage: Usage.type.optional(),
		defaultExpiryMonthDelta: isly.number().optional(),
		defaultExpiryMonthDeltaPerCurrency: isly.record(currencyType, isly.number()).optional(),
		defaultPortalCardType: isly.record(ProviderCode.type, isly.string()).optional(),
		defaultPortalFundingAccount: isly.record(ProviderCode.type, isly.string()).optional(),
		cardTypes: Types.CardTypes.type.optional(),
		inboundTransferConfig: Types.FundingAccountInboundTransferNotification.type.optional(),
		approvalNotificationConfig: Types.ApprovalNotification.type.optional(),
		fundingLimitConfig: Types.FundingLimit.type.optional(),
		cardDeliveryEmailConfig: Types.CardDeliveryEmail.type.optional(),
		portalHideMultipleUseOption: isly.boolean().optional(),
		securityConfig: Types.Security.type.optional(),
		fraudEmailConfig: Types.FraudEmail.type.optional(),
		sso: isly.record(Types.SsoProvider.Type.type, Types.SsoProvider.type).optional(),
		forcedSettlementNotificationConfig: Types.ForcedSettlementNotification.type.optional(),
	})
	export const is = type.is
}
