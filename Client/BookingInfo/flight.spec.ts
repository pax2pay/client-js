import assert from "assert"
import * as dotenv from "dotenv"
import * as pax2pay from "../../index"
import { ErrorResponse } from "../../model"
import { factory as cardFactory } from "../Cards/create/factory";

dotenv.config()
jest.setTimeout(100000)

describe("BookingInfo flight", () => {
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
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject({"code": 7, "errors": [{"message": "Booking info not found"}], "status": 404})

		const saveRequest = {
			passengers: {
				leadPassengerName: "Mr flight",
				adults: 1,
				children: 1,
				infants: 0
			},
			flight: {
				outbound: {
					from: "ASD",
					to: "QWE",
					date: "2021-10-01",
					flightNumbers: ["AA11"]
				},
				homebound: {
					from: "QWE",
					to: "ASD",
					date: "2021-10-07",
					flightNumbers: ["BB22"]
				}
			},
			references: {
				supplierCode:"test",
				supplierBookingReference:"test",
				agentBookingReference:"test",
				fabBasketReference:"test",
				syndicatorName:"test"
			},
			cost:1,
			timestamp: "2020-10-10T10:15:30"
		}

		const expectedResponse = {
			type: "FLIGHT",
			...saveRequest,
			timestamp: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/)
		}
		console.log(await client?.bookingInfo.saveInfoForCard(card.providerCode, card.providerCardId, saveRequest))
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject(expectedResponse)


		const updateRequest = {
			leadPassengerName: "Mr megalodon"
		}
		expect(await client?.bookingInfo.updateInfoForCard(card.providerCode, card.providerCardId, updateRequest)).toMatchObject({
			errors: [ { message: 'Cannot change values' } ]
    })

		expect(await client?.bookingInfo.getForCardSpecificFormat(card.providerCode, card.providerCardId, "FIVE_FIELDS")).toMatchObject({
				agentBookingReference: "test",
				departureDate: "2021-10-01", 
				supplierBookingReference: "test",
				leadPassengerName: "Mr flight",
				supplierCode: "test" 
		})

		const secondSaveRequest = {
				agentBookingReference: "Test",
				departureDate: "2021-07-07", 
				supplierBookingReference: "test",
				leadPassengerName: "Mr bloop",
				supplierCode: "TST" 
		}

		await client?.bookingInfo.saveInfoForCard(card.providerCode, card.providerCardId, secondSaveRequest)
		expect(await client?.bookingInfo.getForCard(card.providerCode, card.providerCardId)).toMatchObject(expectedResponse)



	})
})
