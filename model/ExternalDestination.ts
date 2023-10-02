export interface ExternalDestination {
	payee?: string
}
export namespace ExternalDestination {
	export function is(value: ExternalDestination | any): value is ExternalDestination {
		return typeof value == "object" && (value.payee == undefined || typeof value.payee == "string")
	}
}
