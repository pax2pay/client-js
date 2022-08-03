import { ConfigType } from "./ConfigType"
export interface ConfigTypesResponse {
	types?: ConfigType[]
}

export namespace ConfigTypesResponse {
	export function is(value: ConfigTypesResponse | any): value is ConfigTypesResponse {
		return (
			typeof value == "object" &&
			(value.types == undefined ||
				(Array.isArray(value.types) && value.types.every((item: any) => ConfigType.is(item))))
		)
	}
}
