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
				status?: number
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
				status?: number
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
	async getInvocationsWithId(id: string) {
		return await this.connection.get<model.ReportSubscriptionInvocationResponse[]>(
			`${this.folder}/subscription/${id}/invocations`
		)
	}
	async invokeSubscriptionWithId(id: string) {
		return await this.connection.get<model.ReportSubscriptionResponse[]>(`${this.folder}/subscription/${id}/invoke`)
	}
	async invokeSubscriptions() {
		return await this.connection.get<model.ReportSubscriptionResponse>(`${this.folder}/subscription/invoke`)
	}
	async createSubscription(request: model.ReportSubscriptionRequest) {
		return await this.connection.post<model.ReportSubscriptionResponse>(`${this.folder}/subscription`, request)
	}
	async updateSubscriptionWithId(id: string, request: model.ReportSubscriptionRequest) {
		return await this.connection.put<model.ReportSubscriptionResponse>(`${this.folder}/subscription/${id}`, request)
	}
	async deleteSubscriptionWithId(id: string) {
		return await this.connection.remove<model.ReportSubscriptionResponse>(`${this.folder}/subscription/${id}`)
	}
	async getSubscriptionWithId(id: string) {
		return await this.connection.get<model.ReportSubscriptionResponse>(`${this.folder}/subscription/${id}`)
	}
	async getSubscriptions(page?: number, size?: number, sort?: string) {
		return await this.connection.get<model.ReportSubscriptionResponse[]>(`${this.folder}/subscription`, {
			page,
			size,
			sort,
		})
	}
	static create(connection: Connection) {
		return new Reports(connection)
	}
}
