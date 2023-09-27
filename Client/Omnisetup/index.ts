import { ErrorResponse } from "../../model"
import { OmnisetupRequest } from "../../model/OmnisetupRequest"
import { OmnisetupResponse } from "../../model/OmnisetupResponse"
import { Connection } from "../Connection"

export class Omnisetup {
	protected readonly folder = "omnisetup"
	#connection: Connection
	protected get connection() {
		return this.#connection
	}
	constructor(connection: Connection) {
		this.#connection = connection
	}
	static create(connection: Connection) {
		return new Omnisetup(connection)
	}
	async createOrganisation(
		omnisetupRequest: OmnisetupRequest,
		commit = true
	): Promise<OmnisetupResponse | ErrorResponse> {
		return this.connection.post<OmnisetupResponse | ErrorResponse>(`${this.folder}?commit=${commit}`, omnisetupRequest)
	}
}
