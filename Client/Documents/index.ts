import { Connection } from "../Connection"

export class Documents {
	protected readonly folder = "documents"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Documents(connection)
	}
	/** The document's content. Only documents that passed scanning can be downloaded, anything else answers 404. */
	async download(id: string) {
		return await this.connection.download(`${this.folder}/${id}/content`)
	}
}
