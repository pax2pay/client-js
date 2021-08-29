import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Account extends Resource<model.AccountResponse, model.AccountCreationRequest> {
	constructor(connection: Connection, folder: string, backend: model.AccountResponse) {
		super(connection, folder, backend)
	}
}
