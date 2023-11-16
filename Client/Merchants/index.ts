import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class Merchants extends List<model.MerchantResponse> {
	protected folder = "merchants"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Merchants {
		return new Merchants(connection)
	}
	async searchMerchantsByName(searchString: string) {
		const response = await this.connection.get<model.ErrorResponse | model.MerchantResponse[]>(
			`${this.folder}/searches/${searchString}`,
			{
				page: 0,
				size: 1500,
			}
		)
		return this.extractResponse(response)
	}
}
