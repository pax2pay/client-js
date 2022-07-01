import { CardTypesConfig as ConfigCardTypesConfig } from "./CardTypesConfig"
import { ConfigMatchesRequest as ConfigConfigMatchesRequest } from "./ConfigMatchesRequest"
import { ConfigMatchesResponse as ConfigConfigMatchesResponse } from "./ConfigMatchesResponse"
import { ConfigRequest as ConfigConfigRequest } from "./ConfigRequest"
import { ConfigResponse as ConfigConfigResponse } from "./ConfigResponse"
import { ConfigTypesResponse as ConfigConfigTypesResponse } from "./ConfigTypesResponse"
import { FundingAccountInboundTransferNotificationConfig as ConfigFundingAccountInboundTransferNotificationConfig } from "./FundingAccountInboundTransferNotificationConfig"
import { OrganisationConfig as ConfigOrganisationConfig } from "./OrganisationConfig"
import { Payload as ConfigPayload } from "./Payload"
import { UserConfig as ConfigUserConfig } from "./UserConfig"

export namespace Config {
	export type CardTypesConfig = ConfigCardTypesConfig
	export type ConfigMatchesRequest = ConfigConfigMatchesRequest
	export type ConfigMatchesResponse = ConfigConfigMatchesResponse
	export type ConfigRequest = ConfigConfigRequest
	export type ConfigResponse = ConfigConfigResponse
	export type ConfigTypesResponse = ConfigConfigTypesResponse
	export type FundingAccountInboundTransferNotificationConfig = ConfigFundingAccountInboundTransferNotificationConfig
	export type OrganisationConfig = ConfigOrganisationConfig
	export type Payload = ConfigPayload
	export type UserConfig = ConfigUserConfig
}
