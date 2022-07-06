import * as isoly from "isoly"
import { TransferStatus } from "./TransferStatus"

export interface TransferSearch {
	status?: TransferStatus
	personallyApprovable?: boolean
	searchString?: string
	paymentDates?: isoly.DateRange
}

export namespace TransferSearch {
	export function is(value: TransferSearch | any): value is TransferSearch {
		return (
			typeof value == "object" &&
			(value.status == undefined || TransferStatus.is(value.status)) &&
			(value.personallyApprovable == undefined || typeof value.personallyApprovable == "boolean") &&
			(value.searchString == undefined || typeof value.searchString == "string") &&
			(value.paymentDates == undefined || isoly.DateRange.is(value.paymentDates))
		)
	}
}
