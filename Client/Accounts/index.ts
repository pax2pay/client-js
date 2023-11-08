import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Accounts extends List<model.AccountResponse> {
	protected folder = "funding-accounts"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Accounts(connection)
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

	async getAllFundingAccountsV2Paginated(
		previous?: Paginated<model.FundingAccountResponseV2Basic>,
		page?: number,
		size?: number,
		sort = undefined,
		provider: model.ProviderCode | model.ProviderCode[] = "modulr"
	) {
		return await this.getNextPaginated<model.FundingAccountResponseV2Basic>(
			previous,
			(page, size, sort) =>
				this.connection.get<
					{ list: model.FundingAccountResponseV2Basic[]; totalCount: number } | model.FundingAccountResponseV2Basic[]
				>(`v2/${this.folder}`, {
					page: page,
					size: size,
					sort: sort,
					provider: provider,
				}),
			undefined,
			page,
			size,
			sort
		)
	}
	async getAllFundingAccountsV2FullPaginated(
		previous?: Paginated<model.FundingAccountResponseV2Full>,
		page?: number,
		size?: number,
		sort = undefined,
		provider: model.ProviderCode | model.ProviderCode[] = "modulr"
	) {
		return await this.getNextPaginated<model.FundingAccountResponseV2Full>(
			previous,
			(page, size, sort) =>
				this.connection.get<
					{ list: model.FundingAccountResponseV2Full[]; totalCount: number } | model.FundingAccountResponseV2Full[]
				>(`v2/${this.folder}/info`, {
					page: page,
					size: size,
					sort: sort,
					provider: provider,
				}),
			undefined,
			page,
			size,
			sort
		)
	}
	async getFundingAccountV2(providerCode: model.ProviderCode, providerCodeId: string) {
		return await this.connection.get<model.FundingAccountResponseV2Basic>(
			`v2/${this.folder}/${providerCode}/${providerCodeId}`
		)
	}
	async getFundingAccountV2Full(providerCode: model.ProviderCode, providerCodeId: string) {
		return await this.connection.get<model.FundingAccountResponseV2Full>(
			`v2/${this.folder}/${providerCode}/${providerCodeId}/info`
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
