export interface TransferResponseV2Summary {
	reference: string
	createdBy: string
}

export namespace TransferResponseV2Summary {
	export function is(value: TransferResponseV2Summary | any): value is TransferResponseV2Summary {
		return typeof value == "object" && typeof value.reference == "string" && typeof value.createdBy == "string"
	}
}
