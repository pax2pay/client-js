import * as isoly from "isoly";

		
export interface FlightBookingInfo {
	passengers: {
		leadPassengerName: string,
		adults: number,
		children: number,
		infants: number
	},
	flight: {
		outbound: {
			from: string,
			to: string,
			date: isoly.Date,
			/**
			 * airline code
			 * AA, A1, AAA, A11
			 * [A-Z0-9]{2,3}
			 *
			 * flight number
			 * 1
			 * 123
			 * 1234
			 * \d{1,4}
			 */
			flightNumbers: string[]
		},
		homebound: {
			from: string,
			to: string,
			date: isoly.Date,
			/**
			 * airline code
			 * AA, A1, AAA, A11
			 * [A-Z0-9]{2,3}
			 *
			 * flight number
			 * 1
			 * 123
			 * 1234
			 * \d{1,4}
			 */
			flightNumbers: string[]
		}
	},    
	references: {
			supplierCode?: string,
			supplierName?: string,
			supplierBookingReference?: string,
			agentBookingReference?: string,
			fabBasketReference?: string,
			syndicatorName?: string
	}
	cost: number,
	currency?: isoly.Currency,
	timestamp: isoly.DateTime
}
