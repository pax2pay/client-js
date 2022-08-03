import { AllowedMccConfig as ConfigAllowedMccConfig } from "./AllowedMccConfig"
import { CardDeliveryEmailConfig as ConfigCardDeliveryEmailConfig } from "./CardDeliveryEmailConfig"
import { CardTypesConfig as ConfigCardTypesConfig } from "./CardTypesConfig"
import { ConfigMatchesRequest as ConfigConfigMatchesRequest } from "./ConfigMatchesRequest"
import { ConfigMatchesResponse as ConfigConfigMatchesResponse } from "./ConfigMatchesResponse"
import { ConfigRequest as ConfigConfigRequest } from "./ConfigRequest"
import { ConfigResponse as ConfigConfigResponse } from "./ConfigResponse"
import { ConfigType as ConfigConfigType } from "./ConfigType"
import { ConfigTypesResponse as ConfigConfigTypesResponse } from "./ConfigTypesResponse"
import { FundingAccountInboundTransferNotificationConfig as ConfigFundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { FundingLimitConfig as ConfigFundingLimitConfig } from "./FundingLimitConfig"
import { InternalBalanceLimit as ConfigInternalBalanceLimit } from "./InternalBalanceLimit"
import { InternalOrganisationConfig as ConfigInternalOrganisationConfig } from "./InternalOrganisationConfig"
import { InternalUserConfig as ConfigInternalUserConfig } from "./InternalUserConfig"
import { MCC as ConfigMCC } from "./MCC"
import { MCCRange as ConfigMCCRange } from "./MCCRange"
import { NotificationType as ConfigNotificationType } from "./NotificationType"
import { OrganisationConfig as ConfigOrganisationConfig } from "./OrganisationConfig"
import { OrganisationFlag as ConfigOrganisationFlag } from "./OrganisationFlag"
import { PaxpayFeature as ConfigPaxpayFeature } from "./PaxpayFeature"
import { Payload as ConfigPayload } from "./Payload"
import { TypeName as ConfigTypeName } from "./TypeName"
import { UserConfig as ConfigUserConfig } from "./UserConfig"

export namespace Config {
	export type AllowedMccConfig = ConfigAllowedMccConfig
	export type CardDeliveryEmailConfig = ConfigCardDeliveryEmailConfig
	export const CardDeliveryEmailConfig = ConfigCardDeliveryEmailConfig
	export type ConfigType = ConfigConfigType
	export const ConfigType = ConfigConfigType
	export type FundingLimitConfig = ConfigFundingLimitConfig
	export const FundingLimitConfig = ConfigFundingLimitConfig
	export type InternalBalanceLimit = ConfigInternalBalanceLimit
	export const InternalBalanceLimit = ConfigInternalBalanceLimit
	export type InternalOrganisationConfig = ConfigInternalOrganisationConfig
	export const InternalOrganisationConfig = ConfigInternalOrganisationConfig
	export type InternalUserConfig = ConfigInternalUserConfig
	export const InternalUserConfig = ConfigInternalUserConfig
	export type MCC = ConfigMCC
	export const MCC = ConfigMCC
	export type MCCRange = ConfigMCCRange
	export const MCCRange = ConfigMCCRange
	export type NotificationType = ConfigNotificationType
	export const NotificationType = ConfigNotificationType
	export type OrganisationFlag = ConfigOrganisationFlag
	export const OrganisationFlag = ConfigOrganisationFlag
	export type PaxpayFeature = ConfigPaxpayFeature
	export const PaxpayFeature = ConfigPaxpayFeature
	export type TypeName = ConfigTypeName
	export const TypeName = ConfigTypeName
	export type CardTypesConfig = ConfigCardTypesConfig
	export const CardTypesConfig = ConfigCardTypesConfig
	export type ConfigMatchesRequest = ConfigConfigMatchesRequest
	export const ConfigMatchesRequest = ConfigConfigMatchesRequest
	export type ConfigMatchesResponse = ConfigConfigMatchesResponse
	export const ConfigMatchesResponse = ConfigConfigMatchesResponse
	export type ConfigRequest = ConfigConfigRequest
	export type ConfigResponse = ConfigConfigResponse
	export type ConfigTypesResponse = ConfigConfigTypesResponse
	export const ConfigTypesResponse = ConfigConfigTypesResponse
	export type FundingAccountInboundTransferNotificationConfig = ConfigFundingAccountInboundTransferNotificationConfig
	export const FundingAccountInboundTransferNotificationConfig = ConfigFundingAccountInboundTransferNotificationConfig
	export type OrganisationConfig = ConfigOrganisationConfig
	export const OrganisationConfig = ConfigOrganisationConfig
	export type Payload = ConfigPayload
	export const Payload = ConfigPayload
	export type UserConfig = ConfigUserConfig
	export const UserConfig = ConfigUserConfig
}
