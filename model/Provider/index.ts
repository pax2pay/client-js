import { CredentialRequest as ProviderCredentialRequest } from "./CredentialRequest"
import { CredentialResponse as ProviderCredentialResponse } from "./CredentialResponse"
import { ProviderCode as ProviderProviderCode } from "./ProviderCode"
import { ProviderResponse as ProviderProviderResponse } from "./ProviderResponse"

export namespace Provider {
	export type CredentialRequest = ProviderCredentialRequest
	export type CredentialResponse = ProviderCredentialResponse
	export type ProviderCode = ProviderProviderCode
	export const ProviderCode = ProviderProviderCode
	export type ProviderResponse = ProviderProviderResponse
	export const ProviderResponse = ProviderProviderResponse
}
