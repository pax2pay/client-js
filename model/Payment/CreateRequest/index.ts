import { Card as CardCreateRequest } from "./Card"
import { Transfer as TransferCreateRequest } from "./Transfer"

export namespace CreateRequest {
	export import Card = CardCreateRequest
	export import Transfer = TransferCreateRequest
}
