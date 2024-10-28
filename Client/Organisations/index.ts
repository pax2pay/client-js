import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"

export class Organisations extends List<model.OrganisationResponse> {
	protected readonly folder = "organisations" as const
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Organisations(connection)
	}
	async remove(code: string) {
		return await this.connection.remove<model.OrganisationResponse>(`${this.folder}/${code}`)
	}
	async updateOrganisation(
		code: string,
		request: model.OrganisationRequest
	): Promise<model.ErrorResponse | model.OrganisationResponse> {
		return await this.connection.put<model.OrganisationResponse>(`${this.folder}/${code}`, request)
	}

	async getAllOrganisations(
		page = 0,
		size = 500,
		sort = "name",
		includeNonActive = false
	): Promise<model.ErrorResponse | model.OrganisationResponse[]> {
		const response = await this.connection.get<{ list: model.OrganisationResponse[]; totalCount: number }>(
			this.folder,
			{
				page: page,
				size: size,
				sort: sort,
				includeNonActive: includeNonActive,
			}
		)
		return this.extractResponse(response)
	}
	async search(
		request: model.OrganisationSearchRequest,
		page = 0,
		size = 500,
		sort = "name",
		includeNonActive = false
	) {
		return await this.connection.post<model.OrganisationSearchResponse>(`${this.folder}/searches`, request, {
			page: page,
			size: size,
			sort: sort,
			includeNonActive: includeNonActive,
		})
	}
}
