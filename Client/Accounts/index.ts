import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class Accounts extends List<model.AccountResponse> {
	protected readonly folder = "funding-accounts"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Accounts(connection)
	}
	async addFundingAccount(request: model.AccountCreationRequest) {
		return await this.connection.post<Promise<model.ErrorResponse | model.FundingAccountResponseV2Full>>(
			`${this.folder}`,
			request
		)
	}
	async createFundingAccount(request: model.AccountCreationRequest) {
		return await this.connection.post<Promise<model.ErrorResponse | model.FundingAccountResponseV2Full>>(
			`${this.folder}/create-new`,
			request
		)
	}
	async getAccountSummary(
		providerCodes: model.ProviderCode[],
		accountId?: number,
		accountStates?: model.AccountState[],
		providerAccountId?: string
	) {
		const response = await this.connection.get<
			| {
					list: model.AccountSummary[]
					totalCount: number
			  }
			| model.ErrorResponse
		>(`account-summaries`, {
			refresh: false,
			providerCodes: providerCodes,
			accountId: accountId,
			accountStates: accountStates,
			providerAccountId: providerAccountId,
		})
		return this.extractResponse<model.AccountSummary>(response)
	}
	async updateFundingAccount(
		providerCode: model.ProviderCode,
		providerAccountId: string,
		request: model.UpdateAccountRequest
	) {
		return await this.connection.put<Promise<model.ErrorResponse | model.AccountResponse>>(
			`${this.folder}/${providerCode}/${providerAccountId}`,
			request
		)
	}
	async cancelLimitAlert(providerCode: model.ProviderCode, providerAccountId: string) {
		return await this.connection.remove<Promise<model.ErrorResponse | model.AccountResponse>>(
			`${this.folder}/${providerCode}/${providerAccountId}/limits`
		)
	}

	async getAllFundingAccountsV2(
		providerCode: model.ProviderCode[],
		size = 500,
		sort = "friendlyName",
		organisationCode?: string
	) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		const response = await this.connection.get<{
			list: model.FundingAccountResponseV2Basic[]
			totalCount: number
		}>(
			`v2/${this.folder}`,
			{
				provider: providerCode,
				size: size,
				sort: sort,
			},
			header
		)
		return this.extractResponse(response)
	}
	async getAllFundingAccountsV2Full(providerCode: model.ProviderCode[], size = 500, sort = "friendlyName") {
		const response = await this.connection.get<{ list: model.FundingAccountResponseV2Full[]; totalCount: number }>(
			`v2/${this.folder}/info`,
			{
				provider: providerCode,
				size: size,
				sort: sort,
			}
		)
		return this.extractResponse(response)
	}
	async getFundingAccountV2(providerCode: model.ProviderCode, providerAccountId: string) {
		return await this.connection.get<model.FundingAccountResponseV2Basic>(
			`v2/${this.folder}/${providerCode}/${providerAccountId}`
		)
	}
	async getFundingAccountV2Full(providerCode: model.ProviderCode, providerAccountId: string) {
		return await this.connection.get<model.FundingAccountResponseV2Full>(
			`v2/${this.folder}/${providerCode}/${providerAccountId}/info`
		)
	}
	async getFundingAccounts(
		searchRequest: model.FundingAccountSearchRequest
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.post<{ list: model.AccountResponse[]; totalCount: number }>(
			`${this.folder}/searches`,
			searchRequest
		)
		return this.extractResponse(response)
	}
	async getAllFundingAccounts(
		providerCode: model.ProviderCode,
		size = 500,
		sort = "friendlyName"
	): Promise<model.ErrorResponse | model.AccountResponse[]> {
		const response = await this.connection.get<{ list: model.AccountResponse[]; totalCount: number }>(this.folder, {
			provider: providerCode,
			size: size,
			sort: sort,
		})
		return this.extractResponse(response)
	}
}
