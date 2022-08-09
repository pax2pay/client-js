import * as model from "../../model"
import { Collection } from "../Collection"
import { Connection } from "../Connection"
import { Credential } from "../Credential"
import { Resource } from "../Resource"

export class Credentials extends Collection<
	model.CredentialResponse,
	Partial<model.CredentialRequest>,
	model.CredentialRequest
> {
	protected readonly folder = "credentials"
	constructor(connection: Connection) {
		super(connection)
	}
	protected createResource(
		response: model.CredentialResponse
	): Resource<model.CredentialResponse, { [key: string]: any }> {
		return new Credential(this.connection, [this.folder, response.providerCode].join("/"), response)
	}

	async getAllCredentials() {
		return await this.connection.get(this.folder)
	}

	static create(connection: Connection) {
		return new Credentials(connection)
	}
}
