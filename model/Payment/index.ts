import { CreateRequest as PaymentCreateRequest } from "./CreateRequest"
import { DeliveryRequest as PaymentDeliveryRequest } from "./DeliveryRequest"
import { DeliveryResponse as PaymentDeliveryResponse } from "./DeliveryResponse"
import { DeliveryState as PaymentDeliveryState } from "./DeliveryState"
import { MerchantRequest as PaymentMerchantRequest } from "./MerchantRequest"
import { Request as PaymentRequest } from "./Request"
import { Response as PaymentResponse } from "./Response"
import { Search as PaymentSearch } from "./Search"
import { Status as PaymentStatus } from "./Status"
import { SummaryResponse as PaymentSummaryResponse } from "./SummaryResponse"

export namespace Payment {
	export import CreateRequest = PaymentCreateRequest
	export import DeliveryRequest = PaymentDeliveryRequest
	export import DeliveryResponse = PaymentDeliveryResponse
	export import DeliveryState = PaymentDeliveryState
	export import MerchantRequest = PaymentMerchantRequest
	export import Request = PaymentRequest
	export import Response = PaymentResponse
	export import Search = PaymentSearch
	export import Status = PaymentStatus
	export import SummaryResponse = PaymentSummaryResponse
}
