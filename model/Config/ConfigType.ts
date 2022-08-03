import { Payload } from "./Payload"
import { TypeName } from "./TypeName"

export interface ConfigType {
	payloadType: Payload
	type: TypeName
}

export namespace ConfigType {
	export function is(value: ConfigType | any): value is ConfigType {
		return typeof value == "object" && TypeName.is(value.type) && Payload.is(value.payloadType)
	}
}
