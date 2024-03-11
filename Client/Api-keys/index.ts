import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
export class ApiKeys extends List<model.ApiKeyResponse> {
	protected folder = "api-keys"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new ApiKeys(connection)
	}
	async createApiKeys(
		request: model.ApiKeyCreateRequest
	): Promise<model.ApiKeyCreateResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined> {
		const result = await this.connection.post<model.ApiKeyCreateResponse, 400 | 403 | 404 | 500>(this.folder, request)
		return result
	}
	async getApiKey(
		identifier: string
	): Promise<model.ApiKeyResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined> {
		const result = await this.connection.get<model.ApiKeyResponse, 400 | 403 | 404 | 500>(
			`${this.folder}/${identifier}`
		)
		return result
	}
	async getAllApiKeys(): Promise<
		model.ApiKeyResponse[] | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined
	> {
		const result = await this.connection.get<model.ApiKeyResponse[], 400 | 403 | 404 | 500>(this.folder)
		return result
	}
	async deleteApiKey(
		identifier: string
	): Promise<model.ApiKeyResponse | (model.ErrorResponse & { status: 400 | 403 | 404 | 500 | 503 }) | undefined> {
		const result = await this.connection.remove<model.ApiKeyResponse, 400 | 403 | 404 | 500>(
			`${this.folder}/${identifier}`
		)
		return result
	}
}
