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

	async statementForTable(
		request: model.StatementReportRequest,
		page?: number,
		pageSize?: number
	): Promise<
		| model.StatementReportResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		let path = `statement`
		if (page || pageSize)
			path = this.attachPageable(path, page, pageSize)

		let result
		result = await this.connection.post<{ list: model.StatementReportResponse; totalCount: number }>(path, request)
		if (!model.ErrorResponse.is(result) && "list" in result)
			result = result.list
		return result
	}
	async statementSummaryForTable(
		request: model.StatementSummaryReportRequest,
		page?: number,
		pageSize?: number,
		sort?: "asc" | "desc"
	): Promise<
		| model.StatementSummaryReportResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		let path = `reports/statement/summary`
		if (page || pageSize || sort)
			path = this.attachPageable(path, page, pageSize, sort)

		let result
		result = await this.connection.post<{ list: model.StatementSummaryReportResponse; totalCount: number }>(
			path,
			request
		)
		if (!model.ErrorResponse.is(result) && "list" in result)
			result = result.list
		return result
	}
	async getStatementForTable(rowId: string) {
		const result = await this.connection.get<model.StatementReportResponseRow>(`statement/${rowId}`)
		return result
	}
	attachPageable(base: string, page?: number, pageSize?: number, sort?: "asc" | "desc") {
		return (
			base +
			"?" +
			(page ? `page=${page}` : "") +
			(pageSize && page ? `&size=${pageSize}` : pageSize ? `size=${pageSize}` : sort ? `sort=${sort}` : "")
		)
	}
	async getStatementReportUrl(request: model.StatementReportUrlRequest) {
		const result = await this.connection.post<model.ReportUrlResponse>(`statement/download`, request)
		return result
	}
	async getUserReportUrl(request: model.UserReportUrlRequest) {
		const result = await this.connection.post<model.ReportUrlResponse>(`reports/user/download`, request)
		return result
	}
	async getCardReportUrl(request: model.CardReportUrlRequest) {
		const result = await this.connection.post<model.ReportUrlResponse>(`reports/card/download`, request)
		return result
	}
	async getReconciliationReportUrl(request: model.ReconciliationReportUrlRequest) {
		const result = await this.connection.post<model.ReportUrlResponse>(`reports/reconciliation/download`, request)
		return result
	}
	static create(connection: Connection) {
		return new Reports(connection)
	}
}
