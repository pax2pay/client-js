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
	protected folder = "cards/virtual"
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
		const result = await this.connection.post<model.CardResponse>("cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	static create(connection: Connection): Cards {
		return new Cards(connection)
	}
	async getAllCard(page?: number, pageSize?: number) {
		let path
		if (page || pageSize)
			path = `v2/cards?page=${page ?? 0}&size=${pageSize ?? 20}`
		else
			path = `v2/cards`
		const result = await this.connection.get<model.CardResponseV2[]>(path)
		return result
	}
	async getCard(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection
			.get<model.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}?includeSchedules=true
`)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	async createCard(request: model.CreateCardRequest) {
		const result = await this.connection.post<model.CardResponse>(`cards/virtual`, request)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	async cancelCard(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.remove<model.CardResponse>(
			`cards/virtual/${providerCode}/${providerCardId}/cancel`
		)
		return result
	}
	async getCardTypesV2(providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardTypeResponseV2[]>(`v2/cards/types/${providerCode}`)
		return result
	}
	async getCardTypes(providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardTypeResponse>(`cards/types/${providerCode}`)
		return result
	}
	async getFundingAccounts(searchRequest: model.FundingAccountSearchRequest) {
		const result = await this.connection.post<model.CardFundingAccountResponse[]>(
			"funding-accounts/searches",
			searchRequest
		)
		return result
	}
	async getAllFundingAccounts(providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardFundingAccountResponse[]>(
			`funding-accounts?provider=${providerCode}&size=500`
		)
		return result
	}
	async getCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection
			.get<model.BookingInfoResponse>(`booking-info/cards/${providerCode}/${providerCardId}
`)
		return result
	}
	async editCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode, request: Record<string, any>) {
		const result = await this.connection.put<model.BookingInfoResponse>(
			`booking-info/cards/${providerCode}/${providerCardId}`,
			request
		)
		return result
	}
	async getCardTransaction(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardProcessedTransaction[]>(
			`cards/virtual/${providerCode}/${providerCardId}/statements`
		)
		return result
	}
	async searchTransaction(accountId: number) {
		const result = await this.connection.post<model.CardTransaction[]>(`transactions/searches`, {
			accountId: accountId,
		})
		return result
	}
	async editSchedule(providerCardId: string, providerCode: model.ProviderCode, request: model.ScheduleEntry[]) {
		const result = await this.connection.put<model.CardResponse>(
			`cards/virtual/${providerCode}/${providerCardId}/schedule`,
			{
				schedule: request,
			}
		)
		return result
	}
	async amendExistingCard(providerCardId: string, providerCode: model.ProviderCode, request: model.AmendCardRequest) {
		const result = await this.connection.post<model.CardResponse>(
			`cards/virtual/${providerCode}/${providerCardId}/amend`,
			request
		)
		return result
	}
}
