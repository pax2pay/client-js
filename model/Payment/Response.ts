import { isly } from "isly"
import { CardResponseV3 } from "../CardResponseV3"
import { TransferResponseV3 } from "../TransferResponseV3"
import { BaseResponse } from "./BaseResponse"

export interface Response extends BaseResponse {
	card?: CardResponseV3
	transfer?: TransferResponseV3
}
export namespace Response {
	export const type = BaseResponse.type.extend<Response>({
		card: isly.fromIs("CardResponseV3", CardResponseV3.is).optional(),
		transfer: isly.fromIs("TransferResponseV3", TransferResponseV3.is).optional(),
	})
	export const is = type.is
}
