export interface ExternalSource {
	payer?: string
}
export namespace ExternalSource {
	export function is(value: ExternalSource | any): value is ExternalSource {
		return typeof value == "object" && (value.payer == undefined || typeof value.payer == "string")
	}
}
