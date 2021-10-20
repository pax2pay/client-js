import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import * as model from "../../model"
import * as factory from "./factory"
dotenv.config()
jest.setTimeout(200000)

describe("pax2pay.transfers.create", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)

	it("with beneficiary", async () => {

		const testData = factory.forBeneficiary()
		
		const request: model.TransferRequest = testData[0]
		const expected = testData[1]

		const transfer = await client?.transfers.create(request)

		assert(!ErrorResponse.is(transfer))
		assert(transfer != undefined)

		expect(transfer).toMatchObject(expected)
	})

	it("with destination", async () => {

		const testData = factory.forDestination()

		const request: model.TransferRequest = testData[0]
		const expected = testData[1]

		const transfer = await client?.transfers.create(request)

		
		assert(!ErrorResponse.is(transfer))
		assert(transfer != undefined)
		
		expect(transfer).toMatchObject(expected)

		const saveBeneficiaryRequest = testData[2]
		const expectedWithBeneficiary = testData[3]

		const transferPlusNewBeneficiary = await client?.transfers.create(saveBeneficiaryRequest)

		assert(!ErrorResponse.is(transferPlusNewBeneficiary))
		assert(transferPlusNewBeneficiary != undefined)

		expect(transferPlusNewBeneficiary).toMatchObject(expectedWithBeneficiary)

		assert(transferPlusNewBeneficiary.beneficiary != undefined)
		assert(transferPlusNewBeneficiary.beneficiary.beneficiaryId != undefined)
		const beneficiary = await client?.beneficiaries.getBeneficiary(transferPlusNewBeneficiary.beneficiary.beneficiaryId)

		assert(!ErrorResponse.is(beneficiary))
		assert(beneficiary != undefined)

		expect(beneficiary).toMatchObject({
			transferDestination: transferPlusNewBeneficiary.beneficiary.transferDestination,
			status: expect.stringMatching(/(ACTIVE)|(DELETED)|(OUTDATED)/),
			fullName: expect.any(String),
			beneficiaryId: transferPlusNewBeneficiary.beneficiary.beneficiaryId,
			createdOn: expect.any(String),
		})
	})

	it("with funding account", async () => {

		const testData = factory.forFundingAccount()

		const request: model.TransferRequest = testData[0]
		const expected = testData[1]

		const transfer = await client?.transfers.create(request)

		assert(!ErrorResponse.is(transfer))
		assert(transfer != undefined)

		expect(transfer).toMatchObject(expected)
	})

	it("invalid input, multiple options", async () => {
		const beneficiaryRequest = factory.forBeneficiary()[0]
		const destinationRequest = factory.forDestination()[0]
		const fundingAccountRequest = factory.forFundingAccount()[0]

		const testRequestAll = {
			...beneficiaryRequest,
			...destinationRequest,
			...fundingAccountRequest
		}

		const allOptionsResponse = await client?.transfers.create(testRequestAll)
		
		expect(ErrorResponse.is(allOptionsResponse)).toBeTruthy()
		
		const testRequestTwo = {
			...beneficiaryRequest,
			...destinationRequest,
		}

		const twoOptionsResponse = await client?.transfers.create(testRequestTwo)

		expect(ErrorResponse.is(twoOptionsResponse)).toBeTruthy()
	})
})
