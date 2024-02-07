const transferDirections = ["IN", "OUT"] as const

export type TransferDirection = typeof transferDirections[number]

export namespace TransferDirection {
	export function is(value: unknown): value is TransferDirection {
		return typeof value == "string" && transferDirections.includes(value as TransferDirection)
	}
}
