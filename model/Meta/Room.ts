import { Board } from "./Board"

export interface Room {
	name?: string
	board?: Board
}

export namespace Room {
	export function is(value: Room | any): value is Room {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.board == undefined || Board.is(value.board))
		)
	}
}
