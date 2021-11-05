import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Beneficiary extends Resource<model.BeneficiaryResponse, model.BeneficiaryRequest> {
	constructor(connection: Connection, folder: string, backend: model.BeneficiaryResponse) {
		super(connection, folder, backend)
	}
}
