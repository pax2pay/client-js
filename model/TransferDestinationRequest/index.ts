import { isly } from "isly"
import { Aba as TAba } from "./Aba"
import { Base as TBase } from "./Base"
import { Iban as TIban } from "./Iban"
import { Scan as TScan } from "./Scan"

export type TransferDestinationRequest =
	| TransferDestinationRequest.Iban
	| TransferDestinationRequest.Aba
	| TransferDestinationRequest.Scan

export namespace TransferDestinationRequest {
	export const type = isly.union(TAba.type, TIban.type, TScan.type)

	export import Iban = TIban
	export import Aba = TAba
	export import Scan = TScan

	export import Base = TBase
}
