import * as model from "../../model"
import { Card } from "../Card"
import { Connection } from "../Connection"
import { List } from "../List"

export class Cards extends List<
	model.Card.CardResponseV2 | model.Card.CardResponse,
	model.Card.CardSearch,
	model.Card.CreateCardRequest,
	Card
> {
	protected folder = "cards/virtual"
	constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.Card.CardResponseV2 | model.Card.CardResponse): string {
		return [this.folder, resource.providerCode, resource.providerCardId].join("/")
	}
	protected createResource(response: model.Card.CardResponseV2): Card {
		return new Card(this.connection, [this.folder, response.providerCode, response.providerCardId].join("/"), response)
	}
	protected map(response: model.Card.CardResponseV2): Card & model.Card.CardResponseV2 {
		return Object.assign(new Card(this.connection, this.getResourcePath(response), response), response)
	}
	protected mapLegacy(response: model.Card.CardResponse): Card & model.Card.CardResponse {
		return Object.assign(new Card(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.Card.CreateCardRequest) {
		const result = await this.connection.post<model.Card.CardResponseV2>("v2/cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
	async createLegacy(request: model.Card.CreateCardRequest) {
		const result = await this.connection.post<model.Card.CardResponse>("cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	static create(connection: Connection): Cards {
		return new Cards(connection)
	}
	async getCard(providerCardId: string, providerCode: model.Provider.ProviderCode) {
		const result = await this.connection
			.get<model.Card.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}?includeSchedules=true
`)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	async getCardTypes(providerCode: model.Provider.ProviderCode) {
		const result = await this.connection.get<model.Card.CardTypeResponse[]>(`v2/cards/types/${providerCode}`)
		return result
	}
	async getFundingAccounts(searchRequest: model.Account.AccountSearchRequest) {
		const result = await this.connection.post<model.Account.CardFundingAccountResponse[]>(
			"funding-accounts/searches",
			searchRequest
		)
		return result
	}
	async getCardBookingInfo(providerCardId: string, providerCode: model.Provider.ProviderCode) {
		const result = await this.connection
			.get<model.Card.CardResponse>(`booking-info/cards/${providerCode}/${providerCardId}
`)
		return result
	}
	async editCardBookingInfo(
		providerCardId: string,
		providerCode: model.Provider.ProviderCode,
		request: Record<string, any>
	) {
		const result = await this.connection.put<model.Meta.BookingInfoResponse>(
			`booking-info/cards/${providerCode}/${providerCardId}`,
			request
		)
		return result
	}
}
