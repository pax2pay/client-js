import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Card extends Resource<model.CardResponse, model.CreateCardRequest> {
	constructor(connection: Connection, folder: string, backend: model.CardResponse) {
		super(connection, folder, backend)
	}
	amend(request: model.AmendCardRequest) {
		return this.connection.post<model.CardResponse>(`${this.folder}/amend`, request)
	}
	freeze() {
		return this.connection.get<model.CardResponse>(`${this.folder}/freeze`)
	}
	thaw() {
<<<<<<< HEAD
		this.connection.get<model.CardResponse>(`${this.folder}/thaw`)
	}
	cancel() {
		this.connection.get<model.CardResponse>(`${this.folder}/cancel`)
	}
	process() {
		this.connection.get<model.CardResponse>(`${this.folder}/statements/processed`)
=======
		return this.connection.get<model.CardResponse>(`${this.folder}/thaw`)
	}
	cancel() {
		return this.connection.get<model.CardResponse>(`${this.folder}/cancel`)
	}
	process() {
		return this.connection.get<model.CardResponse>(`${this.folder}/statements/processed`)
>>>>>>> Still wip, did actions for ixaris + corrections
	}
	getTransactions() {
		return this.connection.get<model.TransactionResponse>(`${this.folder}/transactions`)
	}
	getBackend() {
		return this.backend
	}
}
