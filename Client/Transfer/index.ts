import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Transfer extends Resource<model.TransferResponse, model.TransferRequest> {
	constructor(connection: Connection, folder: string, backend: model.TransferResponse) {
		super(connection, folder, backend)
	}
	
}
