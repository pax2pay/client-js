import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class CardTypes extends List<model.CardTypeResponse> {
	protected readonly folder = "cards/types"
	constructor(connection: Connection) {
		super(connection)
	}

	static create(connection: Connection): CardTypes {
		return new CardTypes(connection)
	}

	async getAll(providerCode: model.ProviderCode) {
		const response = await this.connection.get<{ list: model.CardTypeResponse[]; totalCount: number }>(
			`v2/${this.folder}/${providerCode}/all`
		)
		return this.extractResponse<model.CardTypeResponse>(response)
	}

	async listAvailability(
		availabilityType: model.CardTypeRequestAvailabilityType,
		previous?: Paginated<model.AvailableCardTypesHasResponse>,
		page?: number,
		size?: number
	) {
		return await this.getNextPaginated(
			previous,
			(page, size, sort) =>
				this.connection.get<{ list: model.AvailableCardTypesHasResponse[]; totalCount: number }>(
					`v2/${this.folder}/available/${availabilityType}/has`,
					{ page, size, sort, includeCount: true }
				),
			undefined,
			page,
			size
		)
	}

	async getAvailable(
		availabilityType?: model.CardTypeRequestAvailabilityType,
		name?: string,
		organisationCode?: string
	) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.get<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType ?? ""}${availabilityType && name ? `/${name}` : ""}`,
			undefined,
			header
		)
	}

	async setAvailable(
		request: model.SetAvailableCardTypesRequest,
		availabilityType: model.CardTypeRequestAvailabilityType,
		name?: string,
		organisationCode?: string
	) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.post<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			request,
			undefined,
			header
		)
	}

	async deleteAvailable(
		availabilityType: model.CardTypeRequestAvailabilityType,
		name?: string,
		organisationCode?: string
	) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.remove<model.AvailableCardTypesResponse>(
			`v2/${this.folder}/available/${availabilityType}${name ? `/${name}` : ""}`,
			undefined,
			undefined,
			header
		)
	}
}
