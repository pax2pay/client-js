import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class CardOptions extends List<model.InsertCardOptionRequest> {
	protected readonly folder = "card-options"
	private constructor(connection: Connection) {
		super(connection)
	}
	async getCardOptions(organisationCode?: string) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		const response = await this.connection.get<{ list: model.InsertCardOptionRequest[]; totalCount: number }>(
			this.folder,
			undefined,
			header
		)
		return this.extractResponse(response)
	}
	async insertCardOptions(request: model.InsertCardOptionRequest[], organisationCode?: string) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.post<model.InsertCardOptionRequest[]>(this.folder, request, undefined, header)
	}
	async deleteCardOptions(request: model.InsertCardOptionRequest[], organisationCode?: string) {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.remove<model.InsertCardOptionRequest[]>(this.folder, request, undefined, header)
	}
	static create(connection: Connection): CardOptions {
		return new CardOptions(connection)
	}
}
