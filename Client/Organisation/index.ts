import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Organisation extends Resource<model.OrganisationResponse, model.OrganisationResponse> {
	constructor(connection: Connection, folder: string, backend: model.OrganisationResponse) {
		super(connection, folder, backend)
	}
}
