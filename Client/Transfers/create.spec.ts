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

		const expected = {
				status: 400,
				code: 2,
				errors: expect.arrayContaining([
						{ 
							field: 'transferRequest', 
							value: 'OneOf', 
							message: 'OneOf' 
						},
						{
							field: 'transferRequest',
							value: 'OneOf',
							message: 'Invalid One Of'
						},
				])
			}

		expect(allOptionsResponse).toMatchObject(expected)

		const testRequestTwo = {
			...beneficiaryRequest,
			...destinationRequest,
		}

		const twoOptionsResponse = await client?.transfers.create(testRequestTwo)

		expect(twoOptionsResponse).toMatchObject(expected)
	})
})
