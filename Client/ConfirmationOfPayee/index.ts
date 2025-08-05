import * as model from "../../model"
import { Connection } from "../Connection"

export class ConfirmationOfPayee {
	protected readonly folder = "confirmation-of-payee"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new ConfirmationOfPayee(connection)
	}
	async confirm(request: model.ConfirmationOfPayeeRequest) {
		return await this.connection.post<model.ConfirmationOfPayeeResponse>(`${this.folder}`, request)
	}
	async accept(id: string) {
		return await this.connection.get<model.ConfirmationOfPayeeResponse>(`${this.folder}/accept/${id}`)
	}
}
