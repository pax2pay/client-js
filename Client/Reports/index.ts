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
		totalCount?: boolean
	): Promise<
		| { list: model.StatementSummaryReportResponse; totalCount: number }
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		let path = `reports/statement/summary`
		if (page || pageSize || totalCount)
			path = this.attachPageable(path, page, pageSize, totalCount)

		return await this.connection.post<{ list: model.StatementSummaryReportResponse; totalCount: number }>(path, request)
	}
	async getStatementForTable(rowId: string) {
		return await this.connection.get<model.StatementReportResponseRow>(`statement/${rowId}`)
	}
	attachPageable(base: string, page?: number, pageSize?: number, includeCount?: boolean) {
		const params = []
		if (page)
			params.push("page=" + page)
		if (pageSize)
			params.push("size=" + pageSize)
		if (includeCount != undefined)
			params.push("includeCount=" + includeCount)
		return base + "?" + params.join("&")
	}
	async getStatementReportUrl(request: model.StatementReportUrlRequest) {
		return await this.connection.post<model.ReportUrlResponse>(`statement/download`, request)
	}
	async getUserReportUrl(request: model.UserReportUrlRequest) {
		return await this.connection.post<model.ReportUrlResponse>(`reports/user/download`, request)
	}
	async getCardReportUrl(request: model.CardReportUrlRequest) {
		return await this.connection.post<model.ReportUrlResponse>(`reports/card/download`, request)
	}
	async getReconciliationReportUrl(request: model.ReconciliationReportUrlRequest) {
		return await this.connection.post<model.ReportUrlResponse>(`reports/reconciliation/download`, request)
	}
	static create(connection: Connection) {
		return new Reports(connection)
	}
}
