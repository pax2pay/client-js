import { ValidHeaders } from "./ValidHeaders"
export namespace Template {
	const start = [
		"yourReference",
		"card/payment",
		"visa-b2b-vcn-travel/visa-business-prepaid/visa-corporate-debit",
		"your@email.com",
		"yourAccountId",
		"GBP",
	]
	const end = [
		"example",
		"example",
		"2022-04-01 (can not be greater than card expiry date)",
		"example",
		"2022-10-10",
		"10",
	]
	export const fiveFields = [
		ValidHeaders.fiveFields,
		[...start, "default", "2022-10-10", "example", "example", ...end],
	].join("\n")
	export const hotel = [ValidHeaders.hotel, [...start, "hotel", "2022-10-10", "example", "example", ...end]].join("\n")
	export const invoice = [ValidHeaders.invoice, [...start, "invoice", "2022-10-10", ...end]].join("\n")
	export function downloadExampleFile(type: "hotel" | "invoice" | "five-fields", link: EventTarget | null) {
		let template: string
		switch (type) {
			case "hotel":
				template = Template.hotel
				break
			case "invoice":
				template = Template.invoice
				break
			default:
				template = Template.fiveFields
		}
		if (link instanceof HTMLAnchorElement) {
			link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(template)
			link.download = "example.csv"
		}
	}
}
