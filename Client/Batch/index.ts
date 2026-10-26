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
	async create(type: model.Batch.Type, request: Blob): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.post<model.Batch.Response>(`${this.folder}/${type}`, request)
	}
	async get(batchId: string): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.get<model.Batch.Response>(`${this.folder}/${batchId}`)
	}
	async listByType(
		type: model.Batch.Type[],
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
	async listItems<I extends model.Batch.Item = model.Batch.Item>(
		batchId: string,
		previous?: Paginated<I>,
		page?: number,
		size?: number,
		sort = "ordinal,asc"
	): Promise<Paginated<I> | model.ErrorResponse> {
		return await this.getNextPaginated(
			previous,
			(page, size, sort) =>
				this.connection.get<{ list: I[]; totalCount: number }>(`${this.folder}/${batchId}/items`, {
					page,
					size,
					sort,
				}),
			undefined,
			page,
			size,
			sort
		)
	}
	/** Adds items to a batch that is waiting to be run, from item requests or a csv/xlsx file in the batch's format */
	async addItems(
		batchId: string,
		request: model.Batch.Item.Request[] | Blob
	): Promise<model.Batch.Response | model.ErrorResponse> {
		return await this.connection.post<model.Batch.Response>(`${this.folder}/${batchId}/items`, request)
	}
	/** Replaces a todo or failed import item with an item request, and returns the item, now todo */
	async editItem<I extends model.Batch.Item = model.Batch.Item>(
		batchId: string,
		itemId: string,
		request: model.Batch.Item.Request
	): Promise<I | model.ErrorResponse> {
		return await this.connection.put<I>(`${this.folder}/${batchId}/items/${itemId}`, request)
	}
	/** Removes a todo or failed import item, and returns the item, now deleted */
	async removeItem<I extends model.Batch.Item = model.Batch.Item>(
		batchId: string,
		itemId: string
	): Promise<I | model.ErrorResponse> {
		return await this.connection.remove<I>(`${this.folder}/${batchId}/items/${itemId}`)
	}
	async downloadBatchPaymentTemplate(): Promise<model.DownloadableResponse | model.ErrorResponse> {
		return await this.connection.get<model.DownloadableResponse>(`${this.folder}/payment/template`)
	}
}
