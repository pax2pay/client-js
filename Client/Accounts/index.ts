import * as model from "../../model"
import { Account } from "../Account"
import { Connection } from "../Connection"
import { List } from "../List"
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
}
