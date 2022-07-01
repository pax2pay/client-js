import * as model from "../../model"
import { Account } from "../Account"
import { Connection } from "../Connection"
import { List } from "../List"
import { Resource } from "../Resource"

export class Accounts extends List<model.Account.AccountResponse, model.Account.AccountSearchRequest> {
	protected folder = "funding-accounts"
	private constructor(connection: Connection) {
		super(connection)
	}
	protected getResourcePath(resource: model.Account.AccountResponse): string {
		return [this.folder, resource.provider, resource.providerAccountId].join("/")
	}
	protected createResource(
		response: model.Account.AccountResponse
	): Resource<model.Account.AccountResponse, { [key: string]: any }> {
		return new Account(
			this.connection,
			[this.folder, response.provider, response.providerAccountId].join("/"),
			response
		)
	}
	static create(connection: Connection) {
		return new Accounts(connection)
	}
}
