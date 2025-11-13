import { isly } from "isly"

export type Role = typeof Role.values[number]

export namespace Role {
	export const values = [
		"user.create", // users
		"user.list",
		"user.list.own-category",
		"user.view.other",
		"user.edit.self",
		"user.edit.other",
		"user.edit-status",
		"user.change-password.other",
		"user.2fa.remove",
		"api-key.create",
		"api-key.edit",
		"api-key.view",
		"funding-account.view", // funding accounts
		"funding-account.list",
		"funding-account.summary",
		"funding-account.edit",
		"funding-account.add",
		"funding-account.create-new",
		"card.create", // cards
		"card.list",
		"card.view",
		"card.cancel",
		"card.freeze-thaw",
		"card.amend.balance",
		"card.statements",
		"card.create.find-and-amend",
		"card.create.batch",
		"card.create.delivery.email",
		"card.reverse-authorisation",
		"card-options.view",
		"card-options.edit",
		"card-type.edit",
		"card-type.profile.view",
		"card-type.profile.edit",
		"card-type.profile.edit-shared",
		"card-type.profile.edit-default",
		"card-type.profile.set",
		"beneficiary.view", // beneficiaries
		"beneficiary.list",
		"beneficiary.create",
		"beneficiary.edit",
		"beneficiary.create.rebate",
		"transfer.create",
		"transfer.create.delivery.email",
		"transfer.create.beneficiary",
		"transfer.create.non-beneficiary",
		"transfer.create.funding-account",
		"transfer.view",
		"transfer.list",
		"transfer.edit",
		"transfer.cancel",
		"booking-info.create", // transactions & find and amend
		"booking-info.update",
		"booking-info.update.overwrite",
		"booking-info.update.add",
		"transaction.create",
		"transaction.view",
		"transaction.list",
		"transaction.list.card",
		"provider-transaction.insert", // provider transactions
		"provider.modulr", // providers
		"provider.ixaris",
		"provider.wex",
		"provider.conferma",
		"provider.pax2pay",
		"limit.edit.individual", // limits
		"limit.edit.category",
		"limit.edit-category-on-user",
		"pending.request", // pending stuff
		"pending.approve.card",
		"pending.approve.transfer",
		"pending.approve.payment",
		"pending.approve.card-amendment",
		"assume", // admin stuff
		"indefinite-password",
		"ops-tasks",
		"omnisetup",
		"credentials.view",
		"credentials.edit",
		"config.view.internal", // config
		"config.edit.organisation",
		"config.edit.internal",
		"roles.view-internal", // Roles
		"roles.edit-rolesets",
		"user-roles.edit",
		"roles.edit-rolesets.shared",
		"roles.edit-rolesets.default",
		"reports.statement", // reports
		"reports.reconciliation",
		"reports.chargeback",
		"reports.automated",
		"reports.rebate",
		"reports.subscription.view",
		"reports.subscription.edit",
		"schedule.create", // schedules
		"schedule.view",
		"schedule.edit",
		"schedule.cancel",
		"payment.plan", // payments
		"payment.create",
		"payment.view",
		"payment.freeze-thaw",
		"payment.cancel",
		"payment.amend.balance",
		"confirm-payee", // confirmation of payee
	] as const
	export const type = isly.string(values)
	export const is = type.is
}
