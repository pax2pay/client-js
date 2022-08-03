import * as isoly from "isoly"

export interface InternalBalanceLimit {
	currency: isoly.Currency
	lowerLimit: number
	emails: Set<string>
}

export namespace InternalBalanceLimit {
	export function is(value: InternalBalanceLimit | any): value is InternalBalanceLimit {
		return (
			typeof value == "object" &&
			isoly.Currency.is(value.currency) &&
			typeof value.lowerLimit == "number" &&
			value.emails instanceof Set &&
			[...value.emails.values()].every((item: any) => typeof item == "string")
		)
	}
}
