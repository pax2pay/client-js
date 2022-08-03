import { AllowedMccConfig } from "./AllowedMccConfig"

export interface InternalUserConfig {
	allowedMccConfig?: AllowedMccConfig
}

export namespace InternalUserConfig {
	export function is(value: InternalUserConfig | any): value is InternalUserConfig {
		return (
			typeof value == "object" && (value.allowedMccConfig == undefined || AllowedMccConfig.is(value.allowedMccConfig))
		)
	}
}
