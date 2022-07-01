import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Account extends Resource<model.Account.AccountResponse, model.Account.AccountCreationRequest> {
	constructor(connection: Connection, folder: string, backend: model.Account.AccountResponse) {
		super(connection, folder, backend)
	}
}
