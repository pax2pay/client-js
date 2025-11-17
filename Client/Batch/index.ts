import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
export class Batch extends List<model.RolesetResponse> {
	protected readonly folder = "batch"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Batch(connection)
	}
	async get(batchId: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(`${this.folder}/${batchId}`)
	}
	async list(type: model.Batch.Type, size?: number): Promise<model.Batch.Response[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: model.Batch.Response[]; totalCount: number }>(
			`${this.folder}/${type}`,
			{ size }
		)
		return this.extractResponse<model.Batch.Response>(response)
	}
	async run(batchId: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(`${this.folder}/${batchId}/run`)
	}
	async cancel(batchId: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(`${this.folder}/${batchId}/cancel`)
	}
}
