import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Cards extends List<model.CardResponseV2> {
	protected readonly folder = "cards"
	constructor(connection: Connection) {
		super(connection)
	}
	async create(request: model.CreateCardRequest) {
		return await this.connection.post<model.CardResponseV2>(`v2/${this.folder}/virtual/tokenised`, request)
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
		return await this.connection.post<model.CardResponseV2>(`v2/${this.folder}/virtual`, formData)
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
				this.connection.get<{ list: model.CardResponseV2[]; totalCount: number } | model.CardResponseV2[]>(
					`v2/${this.folder}`,
					{
						page: page,
						size: size,
						sort: sort,
						provider: providerCode,
						includeCount: includeCount,
					}
				),
			undefined,
			page,
			size,
			sort
		)
	}

	async getCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(`v2/${this.folder}/virtual/${providerCode}/${providerCardId}
`)
	}
	async cancelCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.remove<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/cancel`
		)
	}
	async generateCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/generate/tokenised`
		)
	}
	async approveCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.post<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/approve`,
			undefined
		)
	}
	async declineCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.post<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/decline`,
			undefined
		)
	}
	async thawCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/thaw`
		)
	}
	async freezeCardV2(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/freeze`
		)
	}
	async reverseAuthorisationV2(providerCode: model.ProviderCode, providerCardId: string, transactionId: string) {
		return await this.connection.remove<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/reverse/${transactionId}`
		)
	}
	// TODO: move CardTypes to its own class
	async getCardTypesV2(
		providerCode?: model.ProviderCode,
		assumedOrg?: string
	): Promise<model.ErrorResponse | model.CardTypeResponse[]> {
		const header = assumedOrg ? { "x-assume": assumedOrg } : undefined
		const response = await this.connection.get<{ list: model.CardTypeResponse[]; totalCount: number }>(
			`v2/${this.folder}/types${providerCode ? `/${providerCode}` : ""}`,
			undefined,
			header
		)
		return this.extractResponse<model.CardTypeResponse>(response)
	}
	async getAllCardTypesV2(providerCode: model.ProviderCode) {
		const response = await this.connection.get<{ list: model.CardTypeResponse[]; totalCount: number }>(
			`v2/${this.folder}/types/${providerCode}/all`
		)
		return this.extractResponse<model.CardTypeResponse>(response)
	}

	// TODO: Deprecate
	async createCardTypeProfileV2(cardTypeProfileRequest: model.CreateCardTypeProfileRequest, organisationCode?: string) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		const response = await this.connection.post<model.CardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles`,
			cardTypeProfileRequest,
			undefined,
			header
		)
		return response
	}

	// TODO: Deprecate
	async updateCardTypeProfileV2(
		cardTypeProfileId: string,
		cardTypeProfileRequest: model.UpdateCardTypeProfileRequest,
		organisationCode?: string
	) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		const response = await this.connection.put<model.CardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles/${cardTypeProfileId}`,
			cardTypeProfileRequest,
			undefined,
			header
		)
		return response
	}

	// TODO: Deprecate
	async getActiveCardTypeProfileV2(organisationCode: string) {
		const header = { "x-assume": organisationCode }
		return await this.connection.get<model.OrganisationCardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles/current`,
			undefined,
			header
		)
	}

	// TODO: Deprecate
	async searchCardTypeProfileV2(request: model.SearchCardTypeProfileRequest, organisationCode?: string) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.post<model.CardTypeProfileResponse[]>(
			`v2/cards/types/profiles/searches`,
			request,
			undefined,
			header
		)
	}

	// TODO: Deprecate
	async setCardTypeProfileV2(organisationCode: string, cardTypeProfileId: string) {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.OrganisationCardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles/current/${cardTypeProfileId}`,
			undefined,
			undefined,
			header
		)
	}

	// TODO: Deprecate
	async assignCardTypeProfileV2(organisationCode: string, cardTypeProfileId: string) {
		const header = { "x-assume": organisationCode }
		return await this.connection.put<model.OrganisationCardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles/current/${cardTypeProfileId}`,
			undefined,
			undefined,
			header
		)
	}

	// TODO: Deprecate
	async unassignCardTypeProfileV2(organisationCode: string, cardTypeProfileId: string) {
		const header = { "x-assume": organisationCode }
		return await this.connection.remove<model.OrganisationCardTypeProfileResponse>(
			`v2/${this.folder}/types/profiles/current/${cardTypeProfileId}`,
			undefined,
			undefined,
			header
		)
	}

	// TODO move to CardTypes class
	async getCardTypes(providerCode: model.ProviderCode) {
		return await this.connection.get<model.CardTypesResponse>(`${this.folder}/types/${providerCode}`)
	}

	async searchCardsV2(
		searchRequest: model.CardSearch,
		parameters?: Record<string, any>
	): Promise<model.ErrorResponse | model.CardResponseV2[]> {
		const response = await this.connection.post<{ list: model.CardResponseV2[]; totalCount: number }>(
			`v2/${this.folder}/searches`,
			searchRequest,
			parameters
		)
		return this.extractResponse<model.CardResponseV2>(response)
	}
	async searchCardsV2Paginated(
		request: model.CardSearch,
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
					`v2/${this.folder}/searches`,
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
	// "Deprecated". This was added to the Accounts class so it can be removed from this when switched over wherever it's used
	async getFundingAccounts(
		searchRequest: model.FundingAccountSearchRequest
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.post<{ list: model.AccountResponse[]; totalCount: number }>(
			"funding-accounts/searches",
			searchRequest
		)
		return this.extractResponse<model.AccountResponse>(response)
	}
	// "Deprecated". This was added to the Accounts class so it can be removed from this when switched over wherever it's used
	async getAllFundingAccounts(
		providerCode: model.ProviderCode,
		size = 500,
		sort = "friendlyName"
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.get<{ list: model.AccountResponse[]; totalCount: number }>(
			`funding-accounts`,
			{ provider: providerCode, size: size, sort: sort }
		)
		return this.extractResponse<model.AccountResponse>(response)
	}
	//Possibly should be moved to its own class
	async getCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.get<model.MetadataResponse>(`booking-info/cards/${providerCode}/${providerCardId}
`)
	}
	//Possibly should be moved to its own class
	async editCardBookingInfo(providerCardId: string, providerCode: model.ProviderCode, request: Record<string, any>) {
		return await this.connection.put<model.MetadataResponse>(
			`booking-info/cards/${providerCode}/${providerCardId}`,
			request
		)
	}
	async editCloseDate(providerCardId: string, providerCode: model.ProviderCode, request: model.EditCloseDateRequest) {
		return await this.connection.put<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/close-date`,
			request
		)
	}
	async deleteCloseDate(providerCardId: string, providerCode: model.ProviderCode) {
		return await this.connection.remove<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/close-date`
		)
	}
	async getCardStatements(
		providerCardId: string,
		providerCode: model.ProviderCode
	): Promise<model.ErrorResponse | model.CardStatement[]> {
		const response = await this.connection.get<{ list: model.CardStatement[]; totalCount: number }>(
			`${this.folder}/virtual/${providerCode}/${providerCardId}/statements`
		)
		return this.extractResponse<model.CardStatement>(response)
	}
	async getCardTransactions(
		providerCardId: string,
		providerCode: model.ProviderCode
	): Promise<model.ErrorResponse | model.CardTransaction[]> {
		const response = await this.connection.get<{ list: model.CardTransaction[]; totalCount: number }>(
			`${this.folder}/virtual/${providerCode}/${providerCardId}/transactions`
		)
		return this.extractResponse<model.CardTransaction>(response)
	}
	//Possibly should be moved to its own class
	async searchTransaction(accountId: number): Promise<model.ErrorResponse | model.CardTransaction[]> {
		const response = await this.connection.post<{ list: model.CardTransaction[]; totalCount: number }>(
			`transactions/searches`,
			{
				accountId: accountId,
			}
		)
		return this.extractResponse<model.CardTransaction>(response)
	}
	async editSchedule(providerCardId: string, providerCode: model.ProviderCode, request: model.ScheduleEntry[]) {
		return await this.connection.put<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/schedule`,
			{
				schedule: request,
			}
		)
	}
	async amendExistingCardV2(providerCardId: string, providerCode: model.ProviderCode, request: model.AmendCardRequest) {
		return await this.connection.put<model.CardResponseV2>(
			`v2/${this.folder}/virtual/${providerCode}/${providerCardId}/amend`,
			request
		)
	}
	// TODO move to CardTypes class
	async getDisplayableCardTypesForProvider(provider: model.ProviderCode = "modulr") {
		return await this.connection.get<Record<string, string>>(`v2/${this.folder}/types/displayable/${provider}`)
	}
}
