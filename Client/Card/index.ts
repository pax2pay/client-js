import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Card extends Resource<model.CardResponseV2, model.CreateCardRequest> {
	constructor(connection: Connection, folder: string, backend: model.CardResponseV2) {
		super(connection, folder, backend)
	}
	amend(request: model.AmendCardRequest) {
		return this.connection.post<model.CardResponseV2>(`${this.folder}/amend`, request)
	}
	freeze() {
		return this.connection.get<model.CardResponseV2>(`${this.folder}/freeze`)
	}
	thaw() {
		this.connection.get<model.CardResponseV2>(`${this.folder}/thaw`)
	}
	cancel() {
		this.connection.get<model.CardResponseV2>(`${this.folder}/cancel`)
	}
	process() {
		this.connection.get<model.CardResponseV2>(`${this.folder}/statements/processed`)
	}
	getTransactions() {
		return this.connection.get<model.TransactionResponse>(`${this.folder}/transactions`)
	}
}
