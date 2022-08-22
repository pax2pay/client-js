import { CardResponse } from "./CardResponse"

export interface CardsResponse {
	draw: number
	recordsTotal: number
	recordsFiltered: number
	data: CardResponse[]
}
