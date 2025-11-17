export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["TEST", "PAYMENT", "REBATE"] as const
}
