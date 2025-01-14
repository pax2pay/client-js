import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Payments extends List<model.Payment.Response> {
	protected readonly folder = "payments"
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Payments {
		return new Payments(connection)
	}
	async create(request: model.Payment.Request) {
		return await this.connection.post<model.ErrorResponse | model.Payment.Response>(this.folder, request)
	}
	async get(id: string) {
		return await this.connection.get<model.Payment.Response>(`${this.folder}/${id}`)
	}
	async search(
		request: model.Payment.Search,
		previous?: Paginated<model.Payment.SummaryResponse>,
		page?: number,
		size?: number,
		sort = "createdOn,desc",
		includeCount = true
	) {
		return await this.getNextPaginated(
			previous,
			(page, size, sort, request) =>
				this.connection.post<
					{ list: model.Payment.SummaryResponse[]; totalCount: number } | model.Payment.SummaryResponse[]
				>(`${this.folder}/searches`, request, { page, size, sort, includeCount }),
			request,
			page,
			size,
			sort
		)
	}
}
