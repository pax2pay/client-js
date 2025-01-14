import { isly } from "isly"

export type CardState = typeof CardState.values[number]

export namespace CardState {
	export const values = ["ACTIVE", "INACTIVE", "DELETED", "EXPIRED", "PENDING", "APPROVED", "DECLINED"] as const

	export const type = isly.string<CardState>(values)
	export const is = type.is
	export function toLowerCaseName(value: CardState) {
		return (
			{
				ACTIVE: "active",
				INACTIVE: "frozen",
				DELETED: "closed",
				EXPIRED: "expired",
				PENDING: "pending",
				APPROVED: "approved",
				DECLINED: "declined",
			} as const
		)[value]
	}
}
