import { MerchantResponse } from "../MerchantResponse"
import { AbstractResponse } from "./AbstractResponse"
import { DeliveryResponse } from "./DeliveryResponse"

export interface BaseResponse extends AbstractResponse {
	merchant?: MerchantResponse
	delivery?: DeliveryResponse
}

export namespace BaseResponse {
	export const type = AbstractResponse.type.extend<BaseResponse>({
		merchant: MerchantResponse.type.optional(),
		delivery: DeliveryResponse.type.optional(),
	})
	export const is = type.is
}
