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
	async listByType(type: model.Batch.Type, size?: number): Promise<model.Batch.Response[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: model.Batch.Response[]; totalCount: number }>(`${this.folder}`, {
			size,
			type,
		})
		return this.extractResponse<model.Batch.Response>(response)
	}
	async run(batchId: string, otp?: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(
			`${this.folder}/${batchId}/run`,
			undefined,
			otp ? { "x-otp": otp } : {}
		)
	}
	async cancel(batchId: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(`${this.folder}/${batchId}/cancel`)
	}
	async listItems(batchId: string, size?: number): Promise<model.Batch.Item[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: model.Batch.Item[]; totalCount: number }>(
			`${this.folder}/${batchId}/items`,
			{ size }
		)
		return this.extractResponse<model.Batch.Item>(response)
	}
}
