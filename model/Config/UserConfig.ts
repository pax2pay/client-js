import { CardTypesConfig } from "./CardTypesConfig"

export interface UserConfig {
	cardTypes?: CardTypesConfig
}

export namespace UserConfig {
	export function is(value: UserConfig | any): value is UserConfig {
		return typeof value == "object" && (value.cardTypes == undefined || CardTypesConfig.is(value.cardTypes))
	}
}
