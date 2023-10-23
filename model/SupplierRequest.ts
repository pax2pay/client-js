import { ProductType } from "./ProductType"

export interface SupplierRequest {
	productType: ProductType
	name: string
	status: "ACTIVE" | "DELETED"
	codes: string[]
}

export namespace SupplierRequest {
	export function is(value: SupplierRequest): value is SupplierRequest {
		return (
			ProductType.is(value.productType) &&
			typeof value.name == "string" &&
			(value.status == "ACTIVE" || value.status == "DELETED") &&
			Array.isArray(value.codes) &&
			value.codes.every(c => typeof c == "string")
		)
	}
}
