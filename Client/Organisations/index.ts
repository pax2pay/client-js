import * as model from "../../model"
import { Collection } from "../Collection"
import { Connection } from "../Connection"
import { Organisation } from "../Organisation"
import { Resource } from "../Resource"

export class Organisations extends Collection<
	model.Organisation.OrganisationResponse,
	Partial<model.Organisation.OrganisationRequest>,
	model.Organisation.OrganisationRequest
> {
	protected readonly folder = "organisations"
	constructor(connection: Connection) {
		super(connection)
	}
	protected createResource(
		response: model.Organisation.OrganisationResponse
	): Resource<model.Organisation.OrganisationResponse, { [key: string]: any }> {
		return new Organisation(this.connection, [this.folder, response.code].join("/"), response)
	}
	static create(connection: Connection) {
		return new Organisations(connection)
	}
}
