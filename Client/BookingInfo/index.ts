import * as model from "../../model"
import { Connection } from "../Connection"

export class BookingInfo{

	protected folder = "booking-info"
	constructor(private readonly connection: Connection) {}

	static create(connection: Connection): BookingInfo {
		return new BookingInfo(connection)
	}

	get(identifier: string) {
		return this.connection.get<model.BookingInfoResponse>(`${this.folder}/${identifier}`)
	}

	getForCard(providerCode: model.ProviderCode, cardId: string) {
		return this.connection.get<model.BookingInfoResponse>(`${this.folder}/cards/${providerCode}/${cardId}`)
	}

	getSpecificFormat(identifier: string, format: string) {
		return this.connection.get<model.BookingInfoResponse>(`${this.folder}/${identifier}/${format}`)
	}

	getForCardSpecificFormat(providerCode: model.ProviderCode, cardId: string, format: string) {
		return this.connection.get<model.BookingInfoResponse>(`${this.folder}/cards/${providerCode}/${cardId}/${format}`)
	}

	updateInfo(identifier: string, request: Partial<model.FiveFieldsBookingInfoRequest> | Partial<model.FlightBookingInfo>) {
		return this.connection.put<model.BookingInfo>(`${this.folder}/${identifier}`, request)
	}

	updateInfoForCard(providerCode: model.ProviderCode, cardId: string, request: Partial<model.FiveFieldsBookingInfoRequest> | Partial<model.FlightBookingInfo>) {
		return this.connection.put<model.BookingInfo>(`${this.folder}/cards/${providerCode}/${cardId}`, request)
	}

	saveInfoForCard(providerCode: model.ProviderCode, cardId: string, request: Partial<model.FiveFieldsBookingInfoRequest> | Partial<model.FlightBookingInfo>) {
		return this.connection.post<model.BookingInfo>(`${this.folder}/cards/${providerCode}/${cardId}`, request)
	}

	getMultiple(request: model.MultipleBookingInfoRequest) {
		return this.connection.post<model.MultipleBookingInfoResponse>(`${this.folder}/get-multiple`, request)
	}
}
