import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import { factory as cardFactory } from "../Cards/create/factory";

dotenv.config()
jest.setTimeout(100000)

describe("BookingInfo fiveFields", () => {
	const client = pax2pay.Client.create(process.env.url)
	beforeAll(
		async () =>	
			await client?.auth.login({
				username: process.env.username ?? "user",
				password: process.env.password ?? "password",
			})
	)

	it("Add to card", async () => {
		const cardRequest = cardFactory(
			{
				cardType: {
						cardTypeId: "MASTERCARD",
					},
					currency: "EUR",
					providerAccountId: process.env[`accountFakeEur`],
					providerCode: "fake",

			}
		)[0]

		const card = await client?.cards.createLegacy(cardRequest)

		assert(!ErrorResponse.is(card))
		assert(card != undefined)

		assert(card.providerCode != undefined)
		assert(card.providerCardId != undefined)
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId))
			.toMatchObject({errors: [{message: "Booking info not found"}], status: 404})

		const saveRequest = {
				agentBookingReference: "Test",
				departureDate: "2021-07-07", 
				supplierBookingReference: "test",
				leadPassengerName: "Mr megaman",
				supplierCode: "TST" 
		}

		const expectedResponse = {
				type: "FIVE_FIELDS",
				...saveRequest
			}
		
		await client?.bookingInfo.saveInfoForCard(card.providerCode, card.providerCardId, saveRequest)
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject(expectedResponse)


		const updateRequest = {
			leadPassengerName: "Mr megalodon"
		}
		expect(await client?.bookingInfo.updateInfoForCard(card.providerCode, card.providerCardId, updateRequest))
			.toMatchObject({errors: [{ message: 'Cannot change values' }]})
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject(expectedResponse)

		const secondSaveRequest = {
				agentBookingReference: "Test",
				departureDate: "2021-05-05", 
				supplierBookingReference: "test",
				leadPassengerName: "Bloop",
				supplierCode: "bkjb" 
		}

		const secondSave = await client?.bookingInfo.saveInfoForCard(card.providerCode, card.providerCardId, secondSaveRequest)
		assert(ErrorResponse.is(secondSave))
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject(expectedResponse)



	})
})
