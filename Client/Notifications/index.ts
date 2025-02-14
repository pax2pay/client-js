import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Notifications extends List<model.Notification.Response> {
	protected readonly folder = "notifications"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Notifications {
		return new Notifications(connection)
	}
	async save(request: model.Notification.InsertRequest): Promise<model.Notification.Response | model.ErrorResponse> {
		return await this.connection.post<model.Notification.Response>(`${this.folder}`, request)
	}
	async markAsRead(id: string): Promise<model.Notification.Response | model.ErrorResponse> {
		return await this.connection.put<model.Notification.Response>(`${this.folder}/${id}/read`, undefined)
	}
	async get(id: string): Promise<model.Notification.Response | model.ErrorResponse> {
		return await this.connection.get<model.Notification.Response>(`${this.folder}/${id}`)
	}
	async delete(id: string): Promise<undefined | model.ErrorResponse> {
		return await this.connection.remove<undefined>(`${this.folder}/${id}`)
	}
	async getAll(
		previous?: Paginated<model.Notification.Response>,
		page?: number,
		size?: number,
		sort: string = "createdOn,desc"
	): Promise<Paginated<model.Notification.Response> | model.ErrorResponse> {
		return await this.getNextPaginated(
			previous,
			(page, size) =>
				this.connection.get<
					{ list: model.Notification.Response[]; totalCount: number } | model.Notification.Response[]
				>(`${this.folder}`, { page, size, sort }),
			undefined,
			page,
			size,
			sort
		)
	}
	async getNumberOfUnread(): Promise<number | model.ErrorResponse> {
		return await this.connection.get<number>(`${this.folder}/unread`)
	}
}
