import * as model from "../../model"
import { Collection } from "../Collection"
import { Connection } from "../Connection"
import { Organisation } from "../Organisation"
import { Resource } from "../Resource"

export class Organisations extends Collection<
	model.OrganisationResponse,
	Partial<model.OrganisationRequest>,
	model.OrganisationRequest
> {
	protected readonly folder = "organisations"
	constructor(connection: Connection) {
		super(connection)
	}
	protected createResource(
		response: model.OrganisationResponse
	): Resource<model.OrganisationResponse, { [key: string]: any }> {
		return new Organisation(this.connection, [this.folder, response.code].join("/"), response)
	}
	static create(connection: Connection) {
		return new Organisations(connection)
	}
}
