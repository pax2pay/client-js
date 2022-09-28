import * as model from "../../model"
import { CategoryResponse } from "../../model/CategoryResponse"
import { Connection } from "../Connection"
export class Categories {
	protected folder = "category"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Categories(connection)
	}
	async getAllCategories() {
		const result = await this.connection.get<{ list: CategoryResponse[]; totalCount: number }>(`category?size=100`)
		if (!model.ErrorResponse.is(result) && "list" in result)
			return result.list
		else
			return result
	}
}
