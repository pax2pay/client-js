import { ProductType } from "./ProductType"

export interface SupplierRequest {
	productType: ProductType
	name: string
	status: "ACTIVE" | "DELETED"
	codes: string[]
}
