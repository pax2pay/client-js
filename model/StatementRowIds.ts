import { ProviderCode } from "./ProviderCode"

export interface StatementRowIds {
	rowId: string
	providerCode: ProviderCode
	providerCardId?: string
	providerTransferId?: string
}

export namespace StatementRowIds {
	export function is(value: StatementRowIds | any): value is StatementRowIds {
		return (
			typeof value == "object" &&
			typeof value.rowId == "string" &&
			ProviderCode.is(value.providerCode) &&
			(value.providerCardId == undefined || typeof value.providerCardId == "string") &&
			(value.providerTransferId == undefined || typeof value.providerTransferId == "string")
		)
	}
}
