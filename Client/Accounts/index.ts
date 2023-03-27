import * as model from "../../model"
import { Account } from "../Account"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"
import { Resource } from "../Resource"

export class Accounts extends List<model.AccountResponse, model.AccountSearchRequest> {
	protected folder = "funding-accounts"
	private constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.AccountResponse): string {
		return [this.folder, resource.provider, resource.providerAccountId].join("/")
	}
	protected createResource(response: model.AccountResponse): Resource<model.AccountResponse, { [key: string]: any }> {
		return new Account(
			this.connection,
			[this.folder, response.provider, response.providerAccountId].join("/"),
			response
		)
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
		>(`account-summaries?refresh=false&providerCodes=${providerCodes}${accountId ? `&accountId=${accountId}` : ""}${
			accountStates ? `&accountStates=${accountStates}` : ""
		}${providerAccountId ? `&providerAccountId=${providerAccountId}` : ""}
`)
		return this.extractResponse(response)
	}
	async updateFundingAccount(
		providerCode: model.ProviderCode,
		providerAccountId: string,
		request: model.UpdateAccountRequest
	) {
		const response = await this.connection.put<Promise<model.ErrorResponse | model.AccountResponse>>(
			`funding-accounts/${providerCode}/${providerAccountId}`,
			request
		)
		return response
	}
	async cancelLimitAlert(providerCode: model.ProviderCode, providerAccountId: string) {
		const response = await this.connection.remove<Promise<model.ErrorResponse | model.AccountResponse>>(
			`funding-accounts/${providerCode}/${providerAccountId}/limits`
		)
		return response
	}

	async getAllFundingAccountsV2Paginated(
		previous?: Paginated<model.FundingAccountResponseV2Basic>,
		page?: number,
		size?: number,
		sort = undefined,
		provider = "modulr"
	) {
		return await this.getNextPaginated<model.FundingAccountResponseV2Basic>(
			previous,
			(page, size, sort) =>
				this.connection.get<
					{ list: model.FundingAccountResponseV2Basic[]; totalCount: number } | model.FundingAccountResponseV2Basic[]
				>(`v2/funding-accounts`, {
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
		provider = "modulr"
	) {
		return await this.getNextPaginated<model.FundingAccountResponseV2Full>(
			previous,
			(page, size, sort) =>
				this.connection.get<
					{ list: model.FundingAccountResponseV2Full[]; totalCount: number } | model.FundingAccountResponseV2Full[]
				>(`v2/funding-accounts/info`, {
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
		const response = await this.connection.get<model.FundingAccountResponseV2Basic>(
			`v2/funding-accounts/${providerCode}/${providerCodeId}`
		)
		return response
	}
	async getFundingAccountV2Full(providerCode: model.ProviderCode, providerCodeId: string) {
		const response = await this.connection.get<model.FundingAccountResponseV2Full>(
			`v2/funding-accounts/${providerCode}/${providerCodeId}/info`
		)
		return response
	}
}
