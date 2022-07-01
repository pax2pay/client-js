import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Organisation extends Resource<
	model.Organisation.OrganisationResponse,
	model.Organisation.OrganisationResponse
> {
	constructor(connection: Connection, folder: string, backend: model.Organisation.OrganisationResponse) {
		super(connection, folder, backend)
	}
}
