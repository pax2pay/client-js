import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Cards extends List<model.CardResponseV2 | model.CardResponse> {
	protected folder = "cards/virtual"
	constructor(connection: Connection) {
		super(connection)
	}
	async create(request: model.CreateCardRequest) {
		return await this.connection.post<model.CardResponseV2>("v2/cards/virtual/tokenised", request)
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
		return await this.connection.post<model.CardResponseV2>("v2/cards/virtual", formData)
	}
	async createLegacy(request: model.CreateCardRequest) {
		return await this.connection.post<model.CardResponse>("cards/virtual", request)
	}
	static create(connection: Connection): Cards {
		return new Cards(connection)
	}
	async getAllCardsPaginated(
		previous?: Paginated<model.CardResponseV2>,
		page?: number,
		size?: number,
		sort = "account.id,desc",
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
		return await this.connection.get<model.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}`, {
			includeSchedules: true,
		})
	}
	async getCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(`v2/cards/virtual/${providerCode}/${providerCardId}
`)
	}
	async createCard(request: model.CreateCardRequest) {
		return await this.connection.post<model.CardResponse>(`cards/virtual`, request)
	}
	async cancelCard(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.remove<model.CardResponse>(`cards/virtual/${providerCode}/${providerCardId}/cancel`)
	}
	async cancelCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.remove<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/cancel`
		)
	}
	async generateCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/generate/tokenised`
		)
	}
	async approveCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.post<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/approve`,
			undefined
		)
	}
	async declineCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.post<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/decline`,
			undefined
		)
	}
	async thawCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(`v2/cards/virtual/${providerCode}/${providerCardId}/thaw`)
	}
	async freezeCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(`v2/cards/virtual/${providerCode}/${providerCardId}/freeze`)
	}
	async getCardTypesV2(providerCode: model.ProviderCode): Promise<model.ErrorResponse | model.CardTypeResponseV2[]> {
		const response = await this.connection.get<{ list: model.CardTypeResponseV2[]; totalCount: number }>(
			`v2/cards/types/${providerCode}`
		)
		return this.extractResponse(response)
	}
	async getCardTypes(providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardTypeResponse>(`cards/types/${providerCode}`)
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
		sort = "account.id,desc",
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
		size = 500,
		sort = "friendlyName"
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.get<{ list: model.AccountResponse[]; totalCount: number }>(
			`funding-accounts`,
			{ provider: providerCode, size: size, sort: sort }
		)
		return this.extractResponse(response)
	}
	async getCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.BookingInfoResponse>(`booking-info/cards/${providerCode}/${providerCardId}
`)
	}
	async editCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode, request: Record<string, any>) {
		return await this.connection.put<model.BookingInfoResponse>(
			`booking-info/cards/${providerCode}/${providerCardId}`,
			request
		)
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
		return await this.connection.put<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/schedule`,
			{
				schedule: request,
			}
		)
	}
	async amendExistingCardV2(providerCardId: string, providerCode: model.ProviderCode, request: model.AmendCardRequest) {
		return await this.connection.put<model.CardResponseV2>(
			`v2/cards/virtual/${providerCode}/${providerCardId}/amend`,
			request
		)
	}
	async getDisplayableCardTypesForProvider(provider: model.ProviderCode = "modulr") {
		return await this.connection.get<Record<string, string>>(`v2/cards/types/displayable/${provider}`)
	}
}
