import { MCCRange } from "./MCCRange"

export interface MCC {
	mcc?: string
	range?: MCCRange
	isoDescription?: string
	usdaDescription?: string
	stripeDescription?: string
	stripeCode?: string
	visaDescription?: string
	visaRequiredClearingName?: string
	alipayDescription?: string
}

export namespace MCC {
	export function is(value: MCC | any): value is MCC {
		return (
			typeof value == "object" &&
			(value.mcc == undefined || typeof value.mcc == "string") &&
			(value.range == undefined || MCCRange.is(value.range)) &&
			(value.isoDescription == undefined || typeof value.isoDescription == "string") &&
			(value.usdaDescription == undefined || typeof value.usdaDescription == "string") &&
			(value.stripeDescription == undefined || typeof value.stripeDescription == "string") &&
			(value.stripeCode == undefined || typeof value.stripeCode == "string") &&
			(value.visaDescription == undefined || typeof value.visaDescription == "string") &&
			(value.visaRequiredClearingName == undefined || typeof value.visaRequiredClearingName == "string") &&
			(value.alipayDescription == undefined || typeof value.alipayDescription == "string")
		)
	}
}
