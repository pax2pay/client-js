import { ProviderCode } from "./ProviderCode"

/**
 * The credentials created
 */
export interface CredentialResponse {
	providerCode?: ProviderCode
	credentialProperties?: Map<string, string>
}
