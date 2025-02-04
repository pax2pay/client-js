import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class CardOptions extends List<model.InsertCardOptionRequest> {
	protected readonly folder = "card-options"
	private constructor(connection: Connection) {
		super(connection)
	}
	async getCardOptions() {
		const response = await this.connection.get<{ list: model.InsertCardOptionRequest[]; totalCount: number }>(
			this.folder,
			{ size: 500 }
		)
		return this.extractResponse(response)
	}
	async insertCardOptions(request: model.InsertCardOptionRequest[]) {
		return await this.connection.post<model.InsertCardOptionRequest[]>(this.folder, request)
	}
	async deleteCardOptions(request: model.InsertCardOptionRequest[]) {
		return await this.connection.remove<model.InsertCardOptionRequest[]>(this.folder, request)
	}
	static create(connection: Connection): CardOptions {
		return new CardOptions(connection)
	}
}
