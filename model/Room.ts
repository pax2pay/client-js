export interface Room {
	name?: string
	board?: Board
}

export type Board = "AI" | "FB" | "HB" | "BB" | "SC" | "RO"

//AI("All Inclusive"),FB("Full Board"),HB("Half Board"),BB("Bed & Breakfast"),SC("Self Catering"),RO("Room Only");
