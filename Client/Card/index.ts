import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Card extends Resource<model.CardResponse, model.CreateCardRequest> {
	constructor(connection: Connection, folder: string, backend: model.CardResponse) {
		super(connection, folder, backend)
	}
	amend(request: model.AmendCardRequest): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.post<model.CardResponse>(`${this.folder}/amend`, request)
	}
	freeze(): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.get<model.CardResponse>(`${this.folder}/freeze`)
	}
	thaw(): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.get<model.CardResponse>(`${this.folder}/thaw`)
	}
	cancel(): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.get<model.CardResponse>(`${this.folder}/cancel`)
	}
	process(): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.get<model.CardResponse>(`${this.folder}/statements/processed`)
	}
	getTransactions(): Promise<model.CardResponse | (model.ErrorResponse & {
    status: 400 | 403 | 404 | 500 | 503;
})> {
		return this.connection.get<model.TransactionResponse>(`${this.folder}/transactions`)
	}
}
