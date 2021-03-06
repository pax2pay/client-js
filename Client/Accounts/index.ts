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
}
