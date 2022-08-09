import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Credential extends Resource<model.CredentialResponse, model.CredentialResponse> {
	constructor(connection: Connection, folder: string, backend: model.CredentialResponse) {
		super(connection, folder, backend)
	}
}
