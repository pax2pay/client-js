import * as model from "../../model"
import { Card } from "../Card"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

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
		const result = await this.connection.post<model.CardResponseV2>("v2/cards/virtual/tokenised", request)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
	async createCardWithRemittanceAdvice(request: model.CreateCardRequest, file: File) {
		const formData = new FormData()
		formData.append("remittanceAdvice", file, file?.name)
		formData.append(
			"request",
			new Blob([JSON.stringify(request, null, 2)], {
				type: "application/json",
			})
		)
		const result = await this.connection.post<model.CardResponseV2>("v2/cards/virtual", formData)
		return model.ErrorResponse.is(result) ? result : this.map(result)
	}
	async createLegacy(request: model.CreateCardRequest) {
		const result = await this.connection.post<model.CardResponse>("cards/virtual", request)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	static create(connection: Connection): Cards {
		return new Cards(connection)
	}
	async getAllCardsPaginated(
		previous?: Paginated<model.CardResponseV2>,
		page?: number,
		size?: number,
		sort = "createdOn,desc",
		providerCode = "modulr",
		includeCount = true
	): Promise<model.ErrorResponse | Paginated<model.CardResponseV2>> {
		return await this.getNextPaginated<model.CardResponseV2>(
			previous,
			(page, size, sort) =>
				this.connection.get<{ list: model.CardResponseV2[]; totalCount: number } | model.CardResponseV2[]>(`v2/cards`, {
					page: page,
					size: size,
					sort: sort,
					provider: providerCode,
					includeCount: includeCount,
				}),
			undefined,
			page,
			size,
			sort
		)
	}
	async getCard(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection
			.get<model.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}?includeSchedules=true
`)
		return model.ErrorResponse.is(result) ? result : this.mapLegacy(result)
	}
	async getCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardResponseV2>(`v2/cards/virtual/${providerCode}/${providerCardId}
`)
		return model.ErrorResponse.is(result) ? result : this.map(result)
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
	async cancelCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.remove<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/cancel`
		)
		return result
	}
	async generateCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/generate/tokenised`
		)
		return result
	}
	async approveCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.post<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/approve`,
			undefined
		)
		return result
	}
	async declineCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.post<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/decline`,
			undefined
		)
		return result
	}
	async thawCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/thaw`
		)
		return result
	}
	async freezeCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/freeze`
		)
		return result
	}
	async getCardTypesV2(providerCode: model.ProviderCode): Promise<model.ErrorResponse | model.CardTypeResponseV2[]> {
		const response = await this.connection.get<{ list: model.CardTypeResponseV2[]; totalCount: number }>(
			`v2/cards/types/${providerCode}`
		)
		return this.extractResponse(response)
	}
	async getCardTypes(providerCode: model.ProviderCode) {
		const result = await this.connection.get<model.CardTypeResponse>(`cards/types/${providerCode}`)
		return result
	}

	async searchCardsV2(
		searchRequest: model.CardSearchRequest,
		parameters?: Record<string, any>
	): Promise<model.ErrorResponse | model.CardResponseV2[]> {
		const response = await this.connection.post<{ list: model.CardResponseV2[]; totalCount: number }>(
			`v2/cards/searches`,
			searchRequest,
			parameters
		)
		return this.extractResponse(response)
	}
	async searchCardsV2Paginated(
		request: model.CardSearchRequest,
		previous?: Paginated<model.CardResponseV2>,
		page?: number,
		size?: number,
		sort = "createdOn,desc",
		includeCount = true
	): Promise<model.ErrorResponse | Paginated<model.CardResponseV2>> {
		return await this.getNextPaginated<model.CardResponseV2>(
			previous,
			(page, size, sort, request) =>
				this.connection.post<{ list: model.CardResponseV2[]; totalCount: number } | model.CardResponseV2[]>(
					`v2/cards/searches`,
					request,
					{
						page: page,
						size: size,
						sort: sort,
						includeCount: includeCount,
					}
				),
			request,
			page,
			size,
			sort
		)
	}
	async getFundingAccounts(
		searchRequest: model.FundingAccountSearchRequest
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.post<{ list: model.AccountResponse[]; totalCount: number }>(
			"funding-accounts/searches",
			searchRequest
		)
		return this.extractResponse(response)
	}
	async getAllFundingAccounts(
		providerCode: model.ProviderCode,
		sort = "friendlyName"
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.get<{ list: model.AccountResponse[]; totalCount: number }>(
			`funding-accounts?provider=${providerCode}&size=500`,
			{ sort: sort }
		)
		return this.extractResponse(response)
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
	async getCardStatements(
		providerCardId: string,
		providerCode: model.ProviderCode
	): Promise<model.ErrorResponse | model.CardStatement[]> {
		const response = await this.connection.get<{ list: model.CardStatement[]; totalCount: number }>(
			`cards/virtual/${providerCode}/${providerCardId}/statements`
		)
		return this.extractResponse(response)
	}
	async getCardTransactions(
		providerCardId: string,
		providerCode: model.ProviderCode
	): Promise<model.ErrorResponse | model.CardTransaction[]> {
		const response = await this.connection.get<{ list: model.CardTransaction[]; totalCount: number }>(
			`cards/virtual/${providerCode}/${providerCardId}/transactions`
		)
		return this.extractResponse(response)
	}
	async searchTransaction(accountId: number): Promise<model.ErrorResponse | model.CardTransaction[]> {
		const response = await this.connection.post<{ list: model.CardTransaction[]; totalCount: number }>(
			`transactions/searches`,
			{
				accountId: accountId,
			}
		)
		return this.extractResponse(response)
	}
	async editSchedule(providerCardId: string, providerCode: model.ProviderCode, request: model.ScheduleEntry[]) {
		const result = await this.connection.put<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/schedule`,
			{
				schedule: request,
			}
		)
		return result
	}
	async amendExistingCardV2(providerCardId: string, providerCode: model.ProviderCode, request: model.AmendCardRequest) {
		const result = await this.connection.put<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/amend`,
			request
		)
		return result
	}
	async getDisplayableCardTypesForProvider(provider: model.ProviderCode = "modulr") {
		return await this.connection.get<Record<string, string>>(`v2/cards/types/displayable/${provider}`)
	}
}
