import * as model from "../../model"
import { Card } from "../Card"
import { Connection } from "../Connection"
import { List } from "../List"

export class Cards extends List<
	model.CardResponseV2 | model.CardResponse,
	model.CardSearch,
	model.CreateCardRequest,
	Card
> {
	protected folder = "cards"
	constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.CardResponseV2 | model.CardResponse): string {
		return [this.folder, resource.providerCode, resource.providerCardId].join("/")
	}
	protected createResource(response: model.CardResponseV2): Card {
		return new Card(this.connection, [this.folder, response.providerCode, response.providerCardId].join("/"), response)
	}
	protected map(response: model.CardResponseV2): Card & model.CardResponseV2 {
		return Object.assign(new Card(this.connection, this.getResourcePath(response), response), response)
	}
	protected mapLegacy(response: model.CardResponse): Card & model.CardResponse {
		return Object.assign(new Card(this.connection, this.getResourcePath(response), response), response)
	}
	async create(request: model.CreateCardRequest) {
		const result = await this.connection.post<model.CardResponseV2>("v2/cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
	async createLegacy(request: model.CreateCardRequest) {
		const result = await this.connection.post<model.CardResponseV2>("cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
	static create(connection: Connection): Cards {
		return new Cards(connection)
	}
	async getCard(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}`)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	async getCardTypes(providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardTypeResponse[]>(`v2/cards/types/${providerCode}`)
		return result
	}
	async getFundingAccounts(searchRequest: model.FundingAccountSearchRequest) {
		const result = await this.connection.post<model.CardFundingAccountResponse[]>(
			"funding-accounts/searches",
			searchRequest
		)
		return result
	}
}
