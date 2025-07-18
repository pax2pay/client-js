import * as isoly from "isoly"
import * as model from "../../model"
import { Connection } from "../Connection"

export class Reports {
	protected readonly folder = "reports"
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

	async getStatementReport(
		request: model.StatementReportRequest,
		page?: number,
		pageSize?: number
	): Promise<
		| model.StatementReportResponse
		| (model.ErrorResponse & {
				status: 400 | 403 | 404 | 500 | 503
		  })
	> {
		let result
		result = await this.connection.post<{ list: model.StatementReportResponse; totalCount: number }>(
			`statement`,
			request,
			{
				page: page,
				size: pageSize,
			}
		)
		if (!model.ErrorResponse.is(result) && "list" in result)
			result = result.list
		return result
	}
	async getStatementSummaryReport(
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
		return await this.connection.post<{ list: model.StatementSummaryReportResponse; totalCount: number }>(
			`reports/statement/summary`,
			request,
			{
				page: page,
				size: pageSize,
				includeCount: totalCount,
			}
		)
	}
	async getStatementReportRow(rowId: string) {
		return await this.connection.get<model.StatementReportResponseRow>(`statement/${rowId}`)
	}
	async getStatementReportUrl(request: model.DownloadStatementReportRequest) {
		return await this.connection.post<model.DownloadableResponse>(`statement/download`, request)
	}
	async getUserReportUrl(request: model.DownloadUserReportRequest) {
		return await this.connection.post<model.DownloadableResponse>(`${this.folder}/user/download`, request)
	}
	async getCardReportUrl(request: model.DownloadCardReportRequest) {
		return await this.connection.post<model.DownloadableResponse>(`${this.folder}/card/download`, request)
	}
	async getReconciliationReportUrl(request: model.DownloadReconciliationReportRequest) {
		return await this.connection.post<model.DownloadableResponse>(`${this.folder}/reconciliation/download`, request)
	}
	async getOrganisationReportUrl(request: model.DownloadOrganisationSearchRequest) {
		return await this.connection.post<model.DownloadableResponse>(`${this.folder}/organisation/download`, request)
	}
	static create(connection: Connection) {
		return new Reports(connection)
	}
}
