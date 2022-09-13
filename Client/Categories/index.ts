import { CategoryResponse } from "../../model/CategoryResponse"
import { Connection } from "../Connection"
export class Categories {
	protected folder = "category"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Categories(connection)
	}
	async getAllCategories() {
		const result = await this.connection.get<CategoryResponse[]>(`category?size=100`)
		return result
	}
}
