import * as isoly from "isoly"
import { Client } from "../../Client/index"
import { CardAmendmentScheduledTaskRequest, CreateCardRequest, ProviderCode } from ".."
import { CardResponseV2 } from "../CardResponseV2"
import { CardStateChangeScheduledTaskRequest } from "../CardStateChangeScheduledTaskRequest"
import { ErrorResponse } from "../ErrorResponse"
import { Email } from "./Email"
import { FiveFields } from "./FiveFields"
import { Hotel } from "./Hotel"
import { Invoice } from "./Invoice"
import { Status } from "./Status"
import { Subtype } from "./Subtype"
import { Type } from "./Type"

export interface BatchItem {
	status?: Status
	reference?: string
	type: "card" | "transfer"
	subtype: Subtype
	recipient: string | [string, string]
	account: string
	currency: isoly.Currency
	meta: FiveFields | Hotel | Invoice
	lapses?: string
	message?: string
	schedule: CardStateChangeScheduledTaskRequest[]
	id?: string
}

export namespace BatchItem {
	export function parseFromCsv(headers: string[], values: string[]): BatchItem {
		let i = 0
		return {
			reference: values[i++], // 0
			type: parseOrError("type", values[i++], (val: any) => Type.is(val)), // 1
			subtype: values[i++], // 2
			recipient: parseOrError("recipient", values[i++], (val: any) => Email.is(val)), // 3
			account: values[i++], // 4
			currency: parseOrError("currency", values[i++], (val: any) => isoly.Currency.is(val)), // 5
			meta: values[i] == "invoice" ? parseMeta(values.slice(i, (i += 4)), 4) : parseMeta(values.slice(i, (i += 6)), 6), // 6 - 11
			lapses: parseOrError("lapses", values[i++], (val: any) => isoly.Date.is(val)), //12
			message: values[i++], //13
			schedule: parseSchedule(values.slice(i)),
		} as BatchItem
	}
	export function getReference(headers: string[], values: string[]): string {
		return values[0]
	}
	function parseMeta(values: string[], length: number): FiveFields | Hotel | Invoice {
		if (values.length != length) {
			throw "Invalid input length " + values.length + " in booking information"
		}

		switch (values[0]) {
			case "default":
			case "five-fields":
				return {
					type: "five-fields",
					departureDate: parseOrError("departureDate", values[1], (val: any) => isoly.Date.is(val)),
					supplierCode: values[2],
					supplierBookingReference: values[3],
					leadPassengerName: values[4],
					agentBookingReference: values[5],
				}
			case "hotel":
				return {
					type: "hotel",
					checkIn: parseOrError("checkInDate", values[1], (val: any) => isoly.Date.is(val)),
					supplierCode: values[2],
					supplierBookingReference: values[3],
					leadPassengerName: values[4],
					agentBookingReference: values[5],
				}
			case "invoice":
				return {
					type: "invoice",
					date: parseOrError("invoiceDate", values[1], (val: any) => isoly.Date.is(val)),
					supplierName: values[2],
					supplierReferenceNumber: values[3],
				}
		}

		throw "Unknown meta type " + values[0]
	}

	function parseSchedule(values: string[]): CardStateChangeScheduledTaskRequest[] {
		if (values.length % 2 != 0) {
			throw "Invalid input length " + values.length + " in payment schedule"
		}

		const result: CardStateChangeScheduledTaskRequest[] = []
		for (let i = 0; i < values.length + 1; i += 2) {
			const date = values[i]
			const amountVal = values[i + 1]
			if (!date && !amountVal) {
				continue
			}
			if (!date || !amountVal) {
				throw "Invalid schedule pair: [" + date + ", " + amountVal + "]"
			}
			if (date < isoly.Date.now())
				throw "Requested dueOn of " + date + " is in the past"
			result.push({
				dueOn: parseOrError("date", date, (val: any) => isoly.Date.is(val)),
				remainingBalance: parseFloat(amountVal),
			})
		}

		if (result.length == 0) {
			throw "No schedules present"
		}
		return result
	}

	function parseOrError<T>(key: string, value: string, isFunction: (val: any) => boolean): T {
		if (isFunction(value)) {
			return value as unknown as T
		}
		throw "Invalid value " + value + " in " + key
	}
	export function invalidColumns(headers: string[], template: string[][]) {
		const validTemplate = template
		const messages: string | undefined[] = []
		const errors: number[] = []
		validTemplate.forEach(v => {
			let error = 0
			let message = undefined
			v.forEach((expectedHeader, index) => {
				if (expectedHeader != headers[index]) {
					error++
					message
						? ""
						: (message = `Expected field '${expectedHeader}' but found invalid field name '${
								headers[index]
						  }' in column ${index + 1}`)
				}
			})
			if (error != 0) {
				errors.push(error)
				messages.push(message)
			}
		})
		return errors.length < validTemplate.length ? undefined : messages[errors.indexOf(Math.min(...errors))]
	}
	export async function execute(
		items: BatchItem[],
		client: Client,
		update: (items: BatchItem[]) => void
	): Promise<void> {
		async function run(): Promise<void> {
			const index = items.findIndex(item => item.status == "imported")

			if (index != -1) {
				update(
					(items = [...items.slice(0, index), { ...items[index], status: "processing" }, ...items.slice(index + 1)])
				)
				const current = items[index]

				if (current.type == "card") {
					const cardRequest = makeCardRequest(current)

					if (typeof cardRequest == "string") {
						if (typeof current.status != "object")
							update(
								(items = [
									...items.slice(0, index),
									{ ...items[index], status: { status: "failed", reason: cardRequest } },
									...items.slice(index + 1),
								])
							)
					} else {
						const cardResponse = await client.cards.create(cardRequest)
						if (CardResponseV2.is(cardResponse)) {
							if (cardResponse.delivery?.status == "FAILURE")
								update(
									(items = [
										...items.slice(0, index),
										{
											...items[index],
											status: {
												status: "failed",
												reason: cardResponse.delivery.statusText ?? "Failed to create card token",
											},
										},
										...items.slice(index + 1),
									])
								)
							else
								update(
									(items = [
										...items.slice(0, index),
										{ ...items[index], id: cardResponse.providerCardId, status: "sent" },
										...items.slice(index + 1),
									])
								)
						} else
							update(
								(items = [
									...items.slice(0, index),
									{
										...items[index],
										status: {
											status: "failed",
											reason:
												ErrorResponse.is(cardResponse) && cardResponse.errors
													? (cardResponse.errors[0].value ?? "") + " " + cardResponse.errors[0].message
													: "Server communication error.",
										},
									},
									...items.slice(index + 1),
								])
							)
					}
				} else if (current.type == "transfer") {
					/*

					//make a transfer request

					const transferResponse = await client.transfers.create(transferRequest)
					if (ErrorResponse.is(transferResponse))
						update(
							(items = [
								...items.slice(0, index),
								{
									...items[index],
									status: {
										status: "failed",
										reason: transferResponse.errors?.[0].message ? transferResponse.errors?.[0].message : "unknown",
									},
								},
								...items.slice(index + 1),
							])
						)
					else
						update((items = [...items.slice(0, index), { ...items[index], status: "sent" }, ...items.slice(index + 1)])) */
					update(
						(items = [
							...items.slice(0, index),
							{ ...items[index], status: { status: "failed", reason: "Transfers not implemented yet." } },
							...items.slice(index + 1),
						])
					)
				} else
					update(
						(items = [
							...items.slice(0, index),
							{ ...items[index], status: { status: "failed", reason: "Unknown batch payment type." } },
							...items.slice(index + 1),
						])
					)
				await run()
			}
		}
		const waitFor: Promise<void>[] = []
		for (let i = 0; i < 10; i++)
			waitFor.push(run()) // no await
		await Promise.all(waitFor)
		//in case an abort is triggered outside, we need this as above to update all items' status.
		//otherwise we just stop the execution but the table will still render the old status.
		update(items.map((i, index) => (i.status == "aborted" ? { ...items[index], status: "aborted" } : i)))
	}

	export function makeCardRequest(current: BatchItem): CreateCardRequest | string {
		let bookingInfo, result, balance, expiryDate
		let schedule: (CardAmendmentScheduledTaskRequest | CardStateChangeScheduledTaskRequest)[] | undefined

		if (current.meta.type == "five-fields")
			bookingInfo = {
				agentBookingReference: current.meta.agentBookingReference,
				departureDate: current.meta.departureDate,
				supplierBookingReference: current.meta.supplierBookingReference,
				leadPassengerName: current.meta.leadPassengerName,
				supplierCode: current.meta.supplierCode,
			}
		else if (current.meta.type == "hotel")
			bookingInfo = {
				hotel: {
					checkIn: current.meta.checkIn,
				},
				references: {
					supplierBookingReference: current.meta.supplierBookingReference,
					agentBookingReference: current.meta.agentBookingReference,
					supplierCode: current.meta.supplierCode,
				},
				passengers: {
					leadPassengerName: current.meta.leadPassengerName,
				},
				timestamp: isoly.DateTime.now(),
			}
		else if (current.meta.type == "invoice")
			bookingInfo = {
				value: current.meta.value,
				date: current.meta.date,
				supplierReferenceNumber: current.meta.supplierReferenceNumber,
				taxElement: current.meta.taxElement,
				supplierName: current.meta.supplierName,
			}

		if (current.schedule.length > 1) {
			const sortedSchedule = current.schedule.sort((a, b) => (a.dueOn > b.dueOn ? 1 : b.dueOn > a.dueOn ? -1 : 0))
			const earliestItem = sortedSchedule[0]
			const latestItem = sortedSchedule[sortedSchedule.length - 1]
			expiryDate = isoly.Date.nextMonth(latestItem.dueOn, 1).substring(0, 7)

			const fundedToday = isoly.Date.now() == earliestItem.dueOn
			const earliestIndex = current.schedule.indexOf(earliestItem)

			current.schedule.forEach((item, i) => {
				if (item.dueOn != isoly.Date.now()) {
					const task = {
						taskType: "CARD_AMENDMENT",
						dueOn: item.dueOn + "T00:00:00Z",
						remainingBalance: !fundedToday && i == earliestIndex ? undefined : item.remainingBalance,
						newBalance: !fundedToday && i == earliestIndex ? item.remainingBalance : undefined,
					} as CardAmendmentScheduledTaskRequest

					schedule ? schedule.push(task) : (schedule = [task])
					schedule.push({
						taskType: "CARD_STATE_CHANGE",
						dueOn: item.dueOn + "T00:00:00Z",
						desiredState: "THAW",
					} as CardStateChangeScheduledTaskRequest)
				}
			})
			balance = !fundedToday ? 1 : current.schedule[earliestIndex].remainingBalance
		} else if (current.schedule.length == 1) {
			const fundedToday = current.schedule[0].dueOn == isoly.Date.now()
			expiryDate = isoly.Date.nextMonth(current.schedule[0].dueOn, 1).substring(0, 7)
			if (!fundedToday) {
				schedule = [
					{
						taskType: "CARD_AMENDMENT",
						dueOn: current.schedule[0].dueOn + "T00:00:00Z",
						remainingBalance: fundedToday ? current.schedule[0].remainingBalance : undefined,
						newBalance: fundedToday ? undefined : current.schedule[0].remainingBalance,
					} as CardAmendmentScheduledTaskRequest,
					{
						taskType: "CARD_STATE_CHANGE",
						dueOn: current.schedule[0].dueOn + "T00:00:00Z",
						desiredState: "THAW",
					} as CardStateChangeScheduledTaskRequest,
				]
			}
			balance = fundedToday ? current.schedule[0].remainingBalance : 1
		}
		let subtype: string
		switch (current.subtype) {
			default:
			case "visa-b2b-vcn-travel":
				subtype = "VISA_DEBIT"
				break
			case "visa-business-prepaid":
				subtype = "VISA_DEBIT_CORPORATE"
				break
			case "visa-corporate-debit":
				subtype = "VISA"
				break
		}
		if (!balance || !expiryDate)
			result = "Missing or non matching occurrences of amount and date."
		else {
			// if the lapses is further away from the expiry date, we want to use the lapses as the basis for the expiry.
			// the substringing code below will advance the month by one if it's within the last week of the month,
			// otherwise using the lapses date directly.
			if (current.lapses && expiryDate <= current.lapses.substring(0, 7)) {
				if (current.lapses.substring(8, 10) <= "23") {
					expiryDate = current.lapses.substring(0, 7)
				} else {
					expiryDate = isoly.Date.nextMonth(current.lapses).substring(0, 7)
				}
			}
			result = {
				providerCode: "modulr" as ProviderCode,
				providerAccountId: current.account,
				balance: balance,
				currency: current.currency,
				cardType: subtype,
				bookingInfo: bookingInfo,
				schedule: schedule,
				expiryDate: expiryDate,
				//email things
				delivery: {
					to: current.recipient,
					message: current.message?.length ? current.message : "Please charge the linked card.",
					linkExpiry: current.lapses,
				},
			}
		}
		return result
	}
}
