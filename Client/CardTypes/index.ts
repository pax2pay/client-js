import * as model from "../../model"
import { Connection } from "../Connection"

export class CardTypes {
	protected readonly folder = "cards/types"
	constructor(private connection: Connection) {}

	static create(connection: Connection): CardTypes {
		return new CardTypes(connection)
	}

	async getAvailableCardTypes(organisationCode?: string) {
		return await this.connection.get<model.AvailableCardTypesResponse>(`v2/${this.folder}/available`, undefined, {
			"x-assume": organisationCode,
		})
	}

	async setAvailableCardTypes(
		request: model.SetAvailableCardTypesRequest,
		availabilityType: model.CardTypeAvailabilityType,
		name: string,
		organisationCode?: string
	) {
		return await this.connection.post<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}/${name}`,
			request,
			undefined,
			{ "x-assume": organisationCode }
		)
	}

	async deleteAvailableCardTypes(
		availabilityType: model.CardTypeAvailabilityType,
		name?: string,
		organisationCode?: string
	) {
		return await this.connection.remove<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			undefined,
			{ "x-assume": organisationCode }
		)
	}
}
