const board = ["AI", "FB", "HB", "BB", "SC", "RO"] as const

export type Board = typeof board[number]

//AI("All Inclusive"),FB("Full Board"),HB("Half Board"),BB("Bed & Breakfast"),SC("Self Catering"),RO("Room Only");

export namespace Board {
	export function is(value: Board | any): value is Board {
		return typeof value == "string" && board.includes(value as Board)
	}
}
