import * as model from "../../model"
import { CategoryResponse } from "../../model/CategoryResponse"
import { Connection } from "../Connection"
import { List } from "../List"
export class Categories extends List<model.CategoryResponse> {
	protected folder = "category"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Categories(connection)
	}
	async getAllCategories() {
		const result = await this.connection.get<{ list: CategoryResponse[]; totalCount: number }>(`category`, {
			size: 100,
			sort: "name",
		})
		return this.extractResponse(result)
	}
	async editCategoryLimits(
		category: string,
		request: model.UpdateCategoryRequest
	): Promise<model.CategoryResponse | model.ErrorResponse> {
		return await this.connection.put<model.CategoryResponse>(`category/${category}`, request)
	}
	async getCategory(category: string): Promise<model.CategoryResponse | model.ErrorResponse> {
		return await this.connection.get<model.CategoryResponse>(`category/${category}`)
	}
}
