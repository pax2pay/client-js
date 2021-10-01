import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Card extends Resource<model.CardResponseV2 | model.CardResponse, model.CreateCardRequest> {
	constructor(connection: Connection, folder: string, backend: model.CardResponseV2 | model.CardResponse) {
		super(connection, folder, backend)
	}
	amend(request: model.AmendCardRequest) {
		return this.connection.post<model.CardResponseV2 | model.CardResponse>(`${this.folder}/amend`, request)
	}
	freeze() {
		return this.connection.get<model.CardResponseV2 | model.CardResponse>(`${this.folder}/freeze`)
	}
	thaw() {
		this.connection.get<model.CardResponseV2 | model.CardResponse>(`${this.folder}/thaw`)
	}
	cancel() {
		this.connection.get<model.CardResponseV2 | model.CardResponse>(`${this.folder}/cancel`)
	}
	process() {
		this.connection.get<model.CardResponseV2 | model.CardResponse>(`${this.folder}/statements/processed`)
	}
	getTransactions() {
		return this.connection.get<model.TransactionResponse>(`${this.folder}/transactions`)
	}
	getBackend() {
		return this.backend
	}
}
