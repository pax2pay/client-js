export interface ExternalSource {
	payer?: string
	iban?: string
	bic?: string
	accountNumber?: string
	sortCode?: string
	abaRoutingNumber?: string
}
export namespace ExternalSource {
	export function is(value: ExternalSource | any): value is ExternalSource {
		return (
			value != null && typeof value == "object" &&
			(value.payer == undefined || typeof value.payer == "string") &&
			(value.iban == undefined || typeof value.iban == "string") &&
			(value.bic == undefined || typeof value.bic == "string") &&
			(value.accountNumber == undefined || typeof value.accountNumber == "string") &&
			(value.sortCode == undefined || typeof value.sortCode == "string") &&
			(value.abaRoutingNumber == undefined || typeof value.abaRoutingNumber == "string")
		)
	}
}
