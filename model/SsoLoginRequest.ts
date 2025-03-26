import { isly } from "isly"
import { AbstractLoginRequest } from "./AbstractLoginRequest"

export interface SsoLoginRequest extends AbstractLoginRequest {
	token: string
}
export namespace SsoLoginRequest {
	export const type = AbstractLoginRequest.type.extend<SsoLoginRequest>({
		token: isly.string(),
	})
	export const is = type.is
}
