import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"
export class Batch extends List<model.Batch.Response> {
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
	async listByType(
		type: model.Batch.Type,
		previous?: Paginated<model.Batch.Response>,
		page?: number,
		size?: number,
		sort = "createdOn,desc"
	): Promise<Paginated<model.Batch.Response> | model.ErrorResponse> {
		return await this.getNextPaginated(
			previous,
			(page, size, sort) =>
				this.connection.get<{ list: model.Batch.Response[]; totalCount: number } | model.Batch.Response[]>(
					`${this.folder}`,
					{ type, page, size, sort }
				),
			undefined,
			page,
			size,
			sort
		)
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
