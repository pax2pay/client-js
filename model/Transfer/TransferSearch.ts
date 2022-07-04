import { DateRangeLocalDate } from "./DateRangeLocalDate"
import { TransferStatus } from "./TransferStatus"

export interface TransferSearch {
	status?: TransferStatus
	personallyApprovable?: boolean
	searchString?: string
	paymentDates?: DateRangeLocalDate
}
