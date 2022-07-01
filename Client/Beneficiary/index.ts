import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Beneficiary extends Resource<model.Transfer.BeneficiaryResponse, model.Transfer.BeneficiaryRequest> {
	constructor(connection: Connection, folder: string, backend: model.Transfer.BeneficiaryResponse) {
		super(connection, folder, backend)
	}
}
