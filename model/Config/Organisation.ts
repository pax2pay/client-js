import { Currency } from "isoly"
import { isly } from "isly"
import { ProviderCode } from "../ProviderCode"
import { Usage } from "../Usage"
import { ApprovalNotification } from "./ApprovalNotification"
import { CardDeliveryEmail } from "./CardDeliveryEmail"
import { CardTypes } from "./CardTypes"
import { ForcedSettlementNotification } from "./ForcedSettlementNotification"
import { FraudEmail } from "./FraudEmail"
import { FundingAccountInboundTransferNotification } from "./FundingAccountInboundTransferNotification"
import { FundingLimit } from "./FundingLimit"
import { Notice } from "./Notice"
import { Security } from "./Security"
import { SsoProvider } from "./SsoProvider"
/**
 * Organisation config, optional
 */
// OrganisationConfig
export interface Organisation {
	showDefaultRolesets?: boolean
	defaultModulrUsage?: Usage
	defaultExpiryMonthDelta?: number
	defaultExpiryMonthDeltaPerCurrency?: Partial<Record<Currency, number>>
	defaultPortalCardType?: Partial<Record<ProviderCode, string>>
	defaultPortalFundingAccount?: Partial<Record<ProviderCode, string>>
	cardTypes?: CardTypes
	inboundTransferConfig?: FundingAccountInboundTransferNotification
	approvalNotificationConfig?: ApprovalNotification
	fundingLimitConfig?: FundingLimit
	cardDeliveryEmailConfig?: CardDeliveryEmail
	portalHideMultipleUseOption?: boolean
	securityConfig?: Security
	fraudEmailConfig?: FraudEmail
	sso?: Partial<Record<SsoProvider.Type, SsoProvider>>
	forcedSettlementNotificationConfig?: ForcedSettlementNotification
	noticeConfigurations?: Notice[]
	portalMetadataFormatOrdering?: string[]
	noticeTargetConfigurations?: Notice.Target.Configuration[]
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
		cardTypes: CardTypes.type.optional(),
		inboundTransferConfig: FundingAccountInboundTransferNotification.type.optional(),
		approvalNotificationConfig: ApprovalNotification.type.optional(),
		fundingLimitConfig: FundingLimit.type.optional(),
		cardDeliveryEmailConfig: CardDeliveryEmail.type.optional(),
		portalHideMultipleUseOption: isly.boolean().optional(),
		securityConfig: Security.type.optional(),
		fraudEmailConfig: FraudEmail.type.optional(),
		sso: isly.record(SsoProvider.Type.type, SsoProvider.type).optional(),
		forcedSettlementNotificationConfig: ForcedSettlementNotification.type.optional(),
		noticeConfigurations: isly.array(Notice.type).optional(),
		portalMetadataFormatOrdering: isly.string().array().optional(),
		noticeTargetConfigurations: Notice.Target.Configuration.type.array().optional(),
	})
	export const is = type.is
}
