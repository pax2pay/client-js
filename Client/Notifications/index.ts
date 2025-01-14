import { ErrorResponse, Notification } from "../../model"
import { Connection } from "../Connection"

export class Notifications {
	protected readonly folder = "notifications"
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	constructor(connection: Connection) {
		this.#connection = connection
	}
	static create(connection: Connection): Notifications {
		return new Notifications(connection)
	}
	async save(request: Notification.InsertRequest): Promise<Notification.Response | ErrorResponse> {
		return await this.connection.post<Notification.Response>(`${this.folder}`, request)
	}
	async getAllNotifications(): Promise<Notification.Response[] | ErrorResponse> {
		return await this.connection.get<Notification.Response[]>(`${this.folder}`)
	}
	async getAllUnreadNotifications(): Promise<number | ErrorResponse> {
		return await this.connection.get<number>(`${this.folder}/unread`)
	}

	async getNotification(id: string): Promise<Notification.Response | ErrorResponse> {
		return await this.connection.get<Notification.Response>(`${this.folder}/${id}`)
	}
}
