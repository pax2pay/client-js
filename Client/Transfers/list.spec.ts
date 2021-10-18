import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.transfers.list", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)

	it("first page", async () => {

		const expected = {
			sourceAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
				/* provider: ProviderResponse
				organisation: OrganisationResponse */
				currency: expect.any(String),
				state: expect.stringMatching(/(ACTIVE)|(INACTIVE)|(CLOSED)|(DELETED)|(EXPIRED)|(PENDING)|(APPROVED)|(DECLINED)|(GENERATED)/),
				friendlyName: expect.any(String),
				balance: expect.any(Number),
				/* actualBalance: expect.any(Number), */
				accountType: expect.stringMatching(/(FUNDING)|(CARD)/),
				/* fundingLimit?: FundingLimitResponse */
				updatedOn: expect.any(String),
				createdOn: expect.any(String),
			}, /* 
			beneficiary: {
	transferDestination?: TransferDestinationInfo
	defaultReference?: string
	status?: "ACTIVE" | "DELETED" | "OUTDATED"
	name?: string
	fullName?: string
	beneficiaryId?: string
	createdOn?: string
	history?: BeneficiaryResponse[]
},
			destinationAccount: {
	id: number
	providerAccountId: string
	provider: ProviderResponse
	organisation: OrganisationResponse
	currency: string
	state: "ACTIVE" | "INACTIVE" | "CLOSED" | "DELETED" | "EXPIRED" | "PENDING" | "APPROVED" | "DECLINED" | "GENERATED"
	friendlyName: string
	balance: number
	actualBalance?: number
	accountType: "FUNDING" | "CARD"
	fundingLimit?: FundingLimitResponse
	updatedOn: string
	createdOn?: string
}, */
			/* destination: {
				accountNumber: expect.any(String),
				sortCode: expect.any(String),
				iban: expect.any(String),
				bic: expect.any(String),
				currency: expect.any(String),
				address: {
					addressLine1: expect.any(String),
					country: expect.any(String),
					postCode: expect.any(String),
					postTown: expect.any(String),
				},
				fullName: expect.any(String)
			},  */
			amount: expect.any(Number),
			status: expect.stringMatching(/(PENDING)|(PENDING_FOR_DATE)|(PENDING_FOR_FUNDS)|(SETTLED)|(CANCELLED)|(ERROR_REJECTED)|(APPROVAL_PENDING)|(DECLINED)|(APPROVED)|(GENERATED)/),
			createdDate: expect.any(String),
			paymentDate: expect.any(String),
			reference: expect.any(String),
			providerCode: expect.stringMatching(/(conferma)|(ixaris)|(wex)|(fake)|(lodged)|(modulr)|(unknown)|(pax2pay)/),
			providerTransferId: expect.any(String),
			scheduled: expect.any(Boolean)
		}

		const transfers = await client?.transfers.list()

		assert(!ErrorResponse.is(transfers))
		assert(transfers != undefined)
		assert(Array.isArray(transfers))

		expect(transfers).toHaveLength(20)
		for (const transfer of transfers)
			expect(transfer).toMatchObject(expected)
	})
})
