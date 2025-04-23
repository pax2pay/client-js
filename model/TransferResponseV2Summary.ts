import { isly } from "isly"
import { TransferDirection } from "./TransferDirection"

export interface TransferResponseV2Summary {
	reference: string
	createdBy: string
	direction: TransferDirection
}

export namespace TransferResponseV2Summary {
	export const type = isly.object<TransferResponseV2Summary>({
		reference: isly.string(),
		createdBy: isly.string(),
		direction: TransferDirection.type,
	})
	export const is = type.is
}
