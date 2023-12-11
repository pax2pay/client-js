/**
 * A set of credentials for provider setup
 */
export interface CredentialRequest {
	credentialProperties: any
}

export namespace CredentialRequest {
	export function is(value: CredentialRequest | any): value is CredentialRequest {
		return typeof value == "object" && value.credentialProperties
	}
}
