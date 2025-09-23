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
}
