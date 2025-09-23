import * as model from "../../model"
import { Connection } from "../Connection"

export class CardTypes {
	protected readonly folder = "cards/types"
	constructor(private connection: Connection) {}

	static create(connection: Connection): CardTypes {
		return new CardTypes(connection)
	}

	async getAvailableCardTypes(availabilityType?: model.CardTypeRequestAvailabilityType, name?: string) {
		return await this.connection.get<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			{ "x-assume": availabilityType == "organisation" ? name : undefined }
		)
	}

	async setAvailableCardTypes(
		request: model.SetAvailableCardTypesRequest,
		availabilityType: model.CardTypeRequestAvailabilityType,
		name?: string
	) {
		return await this.connection.post<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			request,
			undefined,
			{ "x-assume": availabilityType == "organisation" ? name : undefined }
		)
	}

	async deleteAvailableCardTypes(availabilityType: model.CardTypeRequestAvailabilityType, name?: string) {
		return await this.connection.remove<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			undefined,
			{ "x-assume": availabilityType == "organisation" ? name : undefined }
		)
	}
}
