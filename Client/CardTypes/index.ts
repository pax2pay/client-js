import * as model from "../../model"
import { Connection } from "../Connection"

export class CardTypes {
	protected readonly folder = "cards/types"
	constructor(private connection: Connection) {}

	static create(connection: Connection): CardTypes {
		return new CardTypes(connection)
	}

	async getAvailableCardTypes(availabilityType?: model.CardTypeRequestAvailabilityType, name?: string) {
		const header = availabilityType == "organisation" ? { "x-assume": name } : undefined
		return await this.connection.get<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			header
		)
	}

	async setAvailableCardTypes(
		request: model.SetAvailableCardTypesRequest,
		availabilityType: model.CardTypeRequestAvailabilityType,
		name?: string
	) {
		const header = availabilityType == "organisation" ? { "x-assume": name } : undefined
		return await this.connection.post<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			request,
			undefined,
			header
		)
	}

	async deleteAvailableCardTypes(availabilityType: model.CardTypeRequestAvailabilityType, name?: string) {
		const header = availabilityType == "organisation" ? { "x-assume": name } : undefined
		return await this.connection.remove<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			undefined,
			header
		)
	}
}
