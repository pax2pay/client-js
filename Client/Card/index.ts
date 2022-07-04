import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class Card extends Resource<model.Card.CardResponse | model.Card.CardResponseV2, model.Card.CreateCardRequest> {
	constructor(connection: Connection, folder: string, backend: model.Card.CardResponse | model.Card.CardResponseV2) {
		super(connection, folder, backend)
	}
	amend(request: model.Card.AmendCardRequest): Promise<
		| model.Card.CardResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.post<model.Card.CardResponse>(`${this.folder}/amend`, request)
	}
	freeze(): Promise<
		| model.Card.CardResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.get<model.Card.CardResponse>(`${this.folder}/freeze`)
	}
	thaw(): Promise<
		| model.Card.CardResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.get<model.Card.CardResponse>(`${this.folder}/thaw`)
	}
	cancel(): Promise<
		| model.Card.CardResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.get<model.Card.CardResponse>(`${this.folder}/cancel`)
	}
	process(): Promise<
		| model.Report.ProcessedStatement[]
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.get<model.Report.ProcessedStatement[]>(`${this.folder}/statements/processed`)
	}
	getTransactions(): Promise<
		| model.Card.CardResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.get<model.TransactionResponse>(`${this.folder}/transactions`)
	}
}
