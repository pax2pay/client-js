import { CardTypesConfig } from "./Config/Types/CardTypes"
import { Security } from "./Config/Types/Security"

export interface UserConfig {
	cardTypes?: CardTypesConfig
	securityConfig?: Security
}
