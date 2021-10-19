import assert from "assert"
import * as dotenv from "dotenv"
import * as model from "../../model"

dotenv.config()

const sourceAccount = process.env["accountModulrEur"]
assert(sourceAccount)

const basicRequest: model.TransferRequest = {
	providerCode: "modulr" as model.ProviderCode,
	providerSourceAccountId: sourceAccount,
	amount: 1,
	currency: "EUR",
}

const basicExpected = {
	sourceAccount: {
		id: expect.any(Number),
		providerAccountId: expect.any(String),
		currency: expect.any(String),
		state: expect.stringMatching(/(ACTIVE)|(INACTIVE)|(CLOSED)|(DELETED)|(EXPIRED)|(PENDING)|(APPROVED)|(DECLINED)|(GENERATED)/),
		friendlyName: expect.any(String),
		balance: expect.any(Number),
		accountType: expect.stringMatching(/(FUNDING)|(CARD)/),
		updatedOn: expect.any(String),
		createdOn: expect.any(String),
		provider: {
			id: expect.any(Number),
			code: basicRequest.providerCode,
			name: expect.any(String),
			status: expect.stringMatching(/(ACTIVE)|(DELETED)|(INACTIVE)/)
		},
		organisation: {
			code: expect.any(String),
			name: expect.any(String),
			status: expect.stringMatching(/(ACTIVE)|(DELETED)/)
		}
	},  
	amount: expect.any(Number),
	status: expect.stringMatching(/(PENDING)|(PENDING_FOR_DATE)|(PENDING_FOR_FUNDS)|(SETTLED)|(CANCELLED)|(ERROR_REJECTED)|(APPROVAL_PENDING)|(DECLINED)|(APPROVED)|(GENERATED)/),
	createdDate: expect.any(String),
	paymentDate: expect.any(String),
	reference: expect.any(String),
	providerCode: basicRequest.providerCode,
	providerTransferId: expect.any(String),
	scheduled: expect.any(Boolean),
}

export function forBeneficiary(): [model.TransferRequest, model.TransferResponse] {

	const request: model.TransferRequest = {
		...basicRequest,
		beneficiaryId: process.env.beneficiaryModulr,
	}

	assert(request.currency)

	return [
		request,
		{
			...basicExpected,
			amount: request.amount,
			beneficiary: {
				transferDestination: {
					currency: request.currency,
					fullName: expect.any(String), 
				},
				defaultReference: expect.any(String),
				status: expect.stringMatching(/(ACTIVE)|(DELETED)|(OUTDATED)/),
				fullName: expect.any(String),
				beneficiaryId: process.env.beneficiaryModulr,
				createdOn: expect.any(String),
			},

			
		}
	]
}

export function forDestination(): [model.TransferRequest, model.TransferResponse] {

	assert(process.env.testIban)

	const request = {
		...basicRequest,
		destination: {
			iban: process.env.testIban,
			fullName: "Test Transfer",
		},
		reference: "iban transfer test"
	}

	assert(request.currency)

	return [
		request,
		{
			...basicExpected,
			destination: {
				iban: request.destination.iban,
				currency: request.currency,
				fullName: request.destination.fullName
			},
		}
	]
}

export function forFundingAccount(): [model.TransferRequest, any] {

	const request: model.TransferRequest = {
		...basicRequest,
		destinationProviderAccountId: process.env.accountModulrEur2,
		reference: "acc transfer test"

	}
	return [
		request,
		{
			...basicExpected,
			destinationAccount: {
				providerAccountId: request.destinationProviderAccountId
			}
		}
	]
}

export function forGeneric(): model.TransferResponse {
	return {
		...basicExpected,
		sourceAccount: {
			...basicExpected.sourceAccount,
			provider: {
				id: expect.any(Number),
				code: expect.stringMatching(/(conferma)|(ixaris)|(wex)|(fake)|(lodged)|(modulr)|(unknown)|(pax2pay)/),
				name: expect.any(String),
				status: expect.stringMatching(/(ACTIVE)|(DELETED)|(INACTIVE)/)
			},
		},
		providerCode: expect.stringMatching(/(conferma)|(ixaris)|(wex)|(fake)|(lodged)|(modulr)|(unknown)|(pax2pay)/),
	}
}
