import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Transfer extends Resource<model.Transfer.TransferResponse, model.Transfer.TransferRequest> {
	constructor(connection: Connection, folder: string, backend: model.Transfer.TransferResponse) {
		super(connection, folder, backend)
	}
}
