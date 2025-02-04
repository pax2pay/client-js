import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class CardOptions extends List<model.InsertCardOptionRequest> {
	protected readonly folder = "card-options"
	private constructor(connection: Connection) {
		super(connection)
	}
	async getCardOptions(organisationCode: string) {
		const header = { "x-assume": organisationCode }
		const response = await this.connection.get<{ list: model.InsertCardOptionRequest[]; totalCount: number }>(
			this.folder,
			undefined,
			header
		)
		return this.extractResponse(response)
	}
	async insertCardOptions(organisationCode: string, request: model.InsertCardOptionRequest[]) {
		const header = { "x-assume": organisationCode }
		return await this.connection.post<model.InsertCardOptionRequest[]>(this.folder, request, undefined, header)
	}
	async deleteCardOptions(organisationCode: string, request: model.InsertCardOptionRequest[]) {
		const header = { "x-assume": organisationCode }
		return await this.connection.remove<model.InsertCardOptionRequest[]>(this.folder, request, undefined, header)
	}
	static create(connection: Connection): CardOptions {
		return new CardOptions(connection)
	}
}
