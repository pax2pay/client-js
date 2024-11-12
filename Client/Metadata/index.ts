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
	async getFormats(): Promise<MetadataFormat.Response[] | ErrorResponse> {
		return await this.connection.get<MetadataFormat.Response[]>(`${this.folder}/format`)
	}
	async saveFormat(request: MetadataFormat.Request): Promise<MetadataFormat.Response | ErrorResponse> {
		return await this.connection.post<MetadataFormat.Response>(`${this.folder}/format`, request)
	}
	async searchFormat(
		request: MetadataFormat.Search,
		previous?: Paginated<MetadataFormat.Response>,
		page?: number,
		size?: number,
		sort?: string,
		includeCount = true
	): Promise<ErrorResponse | Paginated<MetadataFormat.Response>> {
		return await this.getNextPaginated<MetadataFormat.Response>(
			previous,
			(page, size, sort, request) =>
				this.connection.post<MetadataFormat.Response[]>(`${this.folder}/format/searches`, request, {
					page,
					size,
					sort,
					includeCount,
				}),
			request,
			page,
			size,
			sort
		)
	}

	async getFormat(name: string, version?: number): Promise<MetadataFormat.Response | ErrorResponse> {
		return await this.connection.get<MetadataFormat.Response>(
			`${this.folder}/format/${name}${typeof version == "number" ? `/${version}` : ""}`
		)
	}
}
