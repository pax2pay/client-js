import { DateRangeLocalDate } from "./DateRangeLocalDate"

export interface TransferSearch {
	status?:
		| "PENDING"
		| "PENDING_FOR_DATE"
		| "PENDING_FOR_FUNDS"
		| "SETTLED"
		| "CANCELLED"
		| "ERROR_REJECTED"
		| "APPROVAL_PENDING"
		| "DECLINED"
		| "APPROVED"
		| "GENERATED"
	personallyApprovable?: boolean
	searchString?: string
	paymentDates?: DateRangeLocalDate
}
