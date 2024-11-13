import { ErrorResponse, MetadataFormat } from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
import { Paginated } from "../Paginated"

export class Metadata extends List<MetadataFormat.Response> {
	protected folder = "metadata" as const
	constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection): Metadata {
		return new Metadata(connection)
	}
	async getFormats(organisationCode?: string): Promise<MetadataFormat.Response[] | ErrorResponse> {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.get<MetadataFormat.Response[]>(`${this.folder}/format`, undefined, header)
	}
	async saveFormat(
		request: MetadataFormat.Request,
		organisationCode?: string
	): Promise<MetadataFormat.Response | ErrorResponse> {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.post<MetadataFormat.Response>(`${this.folder}/format`, request, undefined, header)
	}
	async searchFormats(
		request: MetadataFormat.Search,
		previous?: Paginated<MetadataFormat.Response>,
		page?: number,
		size?: number,
		sort?: string,
		includeCount = true,
		organisationCode?: string
	): Promise<ErrorResponse | Paginated<MetadataFormat.Response>> {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.getNextPaginated<MetadataFormat.Response>(
			previous,
			(page, size, sort, request) =>
				this.connection.post<MetadataFormat.Response[]>(
					`${this.folder}/format/searches`,
					request,
					{ page, size, sort, includeCount },
					header
				),
			request,
			page,
			size,
			sort
		)
	}

	async getFormat(
		name: string,
		version?: number,
		organisationCode?: string
	): Promise<MetadataFormat.Response | ErrorResponse> {
		const header = organisationCode ? { "x-assume": organisationCode } : undefined
		return await this.connection.get<MetadataFormat.Response>(
			`${this.folder}/format/${name}${typeof version == "number" ? `/${version}` : ""}`,
			undefined,
			header
		)
	}
}
