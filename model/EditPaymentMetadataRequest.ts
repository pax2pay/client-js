import { isly } from "isly"
import { MetadataRequest } from "./MetadataRequest"

export interface EditPaymentMetadataRequest {
	meta: MetadataRequest
}

export namespace EditPaymentMetadataRequest {
	export const type = isly.object<EditPaymentMetadataRequest>({
		meta: MetadataRequest.type,
	})
	export const is = type.is
}
