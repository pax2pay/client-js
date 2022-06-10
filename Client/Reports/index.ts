import * as isoly from "isoly"
import * as model from "../../model"
import { Connection } from "../Connection"

export class Reports {
	constructor(private readonly connection: Connection) {}

	async reconciliation(start: isoly.DateTime, end: isoly.DateTime) {
		const request = {
			authToken: this.connection.token,
			from: start,
			to: end,
			output: {
				type: "JSON",
			},
		}

		return await this.connection.post<model.Report.Reconciliation>(`../reports/reconciliation`, request)
	}

	async statement(start: isoly.DateTime, end: isoly.DateTime, account: string) {
		const request = {
			authToken: this.connection.token,
			from: start,
			to: end,
			forAccount: account,
			output: {
				type: "JSON",
			},
		}

		return await this.connection.post<model.Report.Statement>(`../reports/statement`, request)
	}

	statementForTable(request: model.StatementReportRequest): Promise<
		| model.StatementReportResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		return this.connection.post<model.StatementReportResponse>(`statement`, request)
	}

	static create(connection: Connection) {
		return new Reports(connection)
	}
}
