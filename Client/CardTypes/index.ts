import * as model from "../../model"
import { Connection } from "../Connection"

export class CardTypes {
	protected readonly folder = "cards/types"
	constructor(private connection: Connection) {}

	static create(connection: Connection): CardTypes {
		return new CardTypes(connection)
	}

	async getAvailableCardTypes() {
		return await this.connection.get<model.AvailableCardTypesResponse>(`v2/${this.folder}/types/available`)
	}

	async setAvailableCardTypes(
		request: model.SetAvailableCardTypesRequest,
		availabilityType: model.CardTypeAvailabilityType,
		name: string
	) {
		return await this.connection.post<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/types/available/${availabilityType}/${name}`,
			request
		)
	}
}
