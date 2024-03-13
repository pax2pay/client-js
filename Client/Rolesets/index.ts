import * as model from "../../model"
import { Connection } from "../Connection"
import { List } from "../List"
export class Rolesets extends List<model.RolesetResponse> {
	protected folder = "rolesets"
	private constructor(connection: Connection) {
		super(connection)
	}
	static create(connection: Connection) {
		return new Rolesets(connection)
	}
	async getRolesets(): Promise<model.RolesetResponse[] | model.ErrorResponse> {
		const response = await this.connection.get<{ list: model.RolesetResponse[]; totalCount: number }>(this.folder, {
			size: 100,
			sort: "name",
		})
		return this.extractResponse<model.RolesetResponse>(response)
	}
	async searchRolesets(request: model.SearchRolesetsRequest, includeRoles = false) {
		const result = await this.connection.post<{ list: model.RolesetResponse[]; totalCount: number }>(
			`${this.folder}/searches?includeRoles=${includeRoles}`,
			request
		)
		return this.extractResponse(result)
	}
}
