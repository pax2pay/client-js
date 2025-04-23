import { StatementReportResponseRow } from "./StatementReportResponseRow"
describe("StatementReportResponseRow is", () => {
	it("list of rows", async () => {
		expect(data1.every(row => StatementReportResponseRow.is(row))).toBeTruthy()
		expect(data2.every(row => StatementReportResponseRow.is(row))).toBeTruthy()
	})

	it("transfer row summary", async () => {
		const json = {
			actionType: "TRANSFER_OUT",
			amount: {
				billing: {
					amount: -1,
					currency: "GBP",
				},
				transaction: {
					amount: -1,
					currency: "GBP",
				},
				fxRate: 1,
			},
			postedDate: "2022-10-11T10:29:15.398511",
			transactionDate: "2022-10-11T10:29:15.398511",
			actualBalance: -1,
			availableBalance: -1,
			rowType: "summary",
			transferType: "CHAPS",
			ids: {
				rowId: "R000000000000424",
				providerCode: "modulr",
				providerTransferId: "P12005RMB0",
			},
			transfer: {
				reference: "fdfg dafgdfg",
				createdBy: "lucym",
				direction: "OUT",
			},
		}

		expect(StatementReportResponseRow.is(json)).toBeTruthy()
	})

	it("transfer row full", async () => {
		const json = {
			actionType: "TRANSFER_OUT",
			amount: {
				billing: {
					amount: -1,
					currency: "GBP",
				},
				transaction: {
					amount: -1,
					currency: "GBP",
				},
				fxRate: 1,
			},
			postedDate: "2022-10-11T10:29:15.398511",
			transactionDate: "2022-10-11T10:29:15.398511",
			actualBalance: -1,
			availableBalance: -1,
			rowType: "full",
			transferType: "CHAPS",
			ids: {
				rowId: "R000000000000424",
				providerCode: "modulr",
				providerTransferId: "P12005RMB0",
			},
			transfer: {
				providerCode: "modulr",
				providerTransferId: "P12005RMB0",
				amount: 1,
				currency: "GBP",
				status: "SETTLED",
				createdDate: "2022-10-11",
				reference: "fdfg dafgdfg",
				source: {
					providerAccountId: "A120CX1Z",
					balance: 3861,
					friendlyName: "Flights GBP 2",
				},
				destination: {
					sortCode: "000000",
					accountNumber: "12341234",
					fullName: "TESTBCN",
					beneficiaryId: "B291",
				},
				direction: "OUT",
				createdBy: "lucym",
			},
		}
		expect(StatementReportResponseRow.is(json)).toBeTruthy()
	})

	it("should be false", async () => {
		expect(StatementReportResponseRow.is(noAmount)).toBeFalsy()

		expect(StatementReportResponseRow.is(noIds)).toBeFalsy()
	})
})

const noAmount = {
	actionType: "TRANSFER_OUT",
	postedDate: "2022-10-11T10:29:15.398511",
	transactionDate: "2022-10-11T10:29:15.398511",
	actualBalance: -1,
	availableBalance: -1,
	rowType: "full",
	transferType: "CHAPS",
	ids: {
		rowId: "R000000000000424",
		providerCode: "modulr",
		providerTransferId: "P12005RMB0",
	},
	transfer: {
		providerCode: "modulr",
		providerTransferId: "P12005RMB0",
		amount: 1,
		currency: "GBP",
		status: "SETTLED",
		createdDate: "2022-10-11",
		reference: "fdfg dafgdfg",
		source: {
			providerAccountId: "A120CX1Z",
			balance: 3861,
			friendlyName: "Flights GBP 2",
		},
		destination: {
			sortCode: "000000",
			accountNumber: "12341234",
			fullName: "TESTBCN",
			beneficiaryId: "B291",
		},
		direction: "OUT",
		createdBy: "lucym",
	},
}

const noIds = {
	actionType: "TRANSFER_OUT",
	amount: {
		billing: {
			amount: -1,
			currency: "GBP",
		},
		transaction: {
			amount: -1,
			currency: "GBP",
		},
		fxRate: 1,
	},
	postedDate: "2022-10-11T10:29:15.398511",
	transactionDate: "2022-10-11T10:29:15.398511",
	actualBalance: -1,
	availableBalance: -1,
	rowType: "full",
	transferType: "CHAPS",
	transfer: {
		providerCode: "modulr",
		providerTransferId: "P12005RMB0",
		amount: 1,
		currency: "GBP",
		status: "SETTLED",
		createdDate: "2022-10-11",
		reference: "fdfg dafgdfg",
		source: {
			providerAccountId: "A120CX1Z",
			balance: 3861,
			friendlyName: "Flights GBP 2",
		},
		destination: {
			sortCode: "000000",
			accountNumber: "12341234",
			fullName: "TESTBCN",
			beneficiaryId: "B291",
		},
		direction: "OUT",
		createdBy: "lucym",
	},
}

const data1 = [
	{
		actionType: "TRANSFER_OUT",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		postedDate: "2022-10-11T10:29:15.398511",
		transactionDate: "2022-10-11T10:29:15.398511",
		actualBalance: -1,
		availableBalance: -1,
		rowType: "summary",
		transferType: "CHAPS",
		ids: {
			rowId: "R000000000000424",
			providerCode: "modulr",
			providerTransferId: "P12005RMB0",
		},
		transfer: {
			reference: "fdfg dafgdfg",
			createdBy: "lucym",
			direction: "OUT",
		},
	},
	{
		actionType: "TRANSFER_OUT",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		postedDate: "2022-10-11T10:29:15.398511",
		transactionDate: "2022-10-11T10:29:15.398511",
		actualBalance: -2,
		availableBalance: -2,
		rowType: "summary",
		transferType: "DIRECT_DEBIT",
		ids: {
			rowId: "R000000000000425",
			providerCode: "modulr",
			providerTransferId: "P12005RMB0",
		},
		transfer: {
			reference: "fdfg dafgdfg",
			createdBy: "lucym",
			direction: "OUT",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -100,
				currency: "GBP",
			},
			transaction: {
				amount: -100,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -50,
			rebateRate: 0.5,
		},
		postedDate: "2022-08-30T13:25:04.663776",
		transactionDate: "2022-09-02T04:00:04.663776",
		actualBalance: -25,
		availableBalance: -525,
		rowType: "summary",
		ids: {
			rowId: "R000000000000421",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******9036",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -100,
				currency: "GBP",
			},
			transaction: {
				amount: -100,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -50,
			rebateRate: 0.5,
		},
		postedDate: "2022-08-30T13:24:18.374229",
		transactionDate: "2022-09-02T04:00:18.374229",
		actualBalance: -25,
		availableBalance: -425,
		rowType: "summary",
		ids: {
			rowId: "R000000000000420",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******9923",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -100,
				currency: "GBP",
			},
			transaction: {
				amount: -100,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -50,
			rebateRate: 0.5,
		},
		postedDate: "2022-08-30T13:23:24.638594",
		transactionDate: "2022-09-02T04:00:24.638594",
		actualBalance: -25,
		availableBalance: -325,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041F",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******4569",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -100,
				currency: "GBP",
			},
			transaction: {
				amount: -100,
				currency: "GBP",
			},
			fxRate: 1,
		},
		postedDate: "2022-08-30T13:22:16.724016",
		actualBalance: -25,
		availableBalance: -225,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041E",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******3389",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -100,
				currency: "GBP",
			},
			transaction: {
				amount: -100,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -50,
			rebateRate: 0.5,
		},
		postedDate: "2022-08-30T13:22:16.724016",
		transactionDate: "2022-09-02T04:00:16.724016",
		actualBalance: -25,
		availableBalance: -125,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041D",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******3389",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -10,
				currency: "GBP",
			},
			transaction: {
				amount: -10,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
		},
		postedDate: "2022-06-14T08:26:18.234421",
		transactionDate: "2022-06-17T04:00:18.234421",
		actualBalance: 0,
		availableBalance: -25,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041C",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******5541",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -12,
				currency: "GBP",
			},
			transaction: {
				amount: -12,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -6,
			rebateRate: 0.5,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-14T07:25:39.318666",
		transactionDate: "2022-06-17T04:00:39.318666",
		actualBalance: 0,
		availableBalance: -15,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041B",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******2654",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -7483,
		availableBalance: -7510,
		rowType: "summary",
		ids: {
			rowId: "R000000000000276",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -7483,
		availableBalance: -7509,
		rowType: "summary",
		ids: {
			rowId: "R000000000000275",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -7483,
		availableBalance: -7511,
		rowType: "summary",
		ids: {
			rowId: "R000000000000277",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "SETTLEMENT",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
			rebate: -0.5,
			rebateRate: 0.5,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		transactionDate: "2022-06-16T04:00:34.768991",
		actualBalance: 0,
		availableBalance: -3,
		rowType: "summary",
		ids: {
			rowId: "R00000000000041A",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -236,
		availableBalance: -241,
		rowType: "summary",
		ids: {
			rowId: "R0000000000002D3",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -236,
		availableBalance: -243,
		rowType: "summary",
		ids: {
			rowId: "R0000000000002D5",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -7483,
		availableBalance: -7508,
		rowType: "summary",
		ids: {
			rowId: "R000000000000274",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -236,
		availableBalance: -240,
		rowType: "summary",
		ids: {
			rowId: "R0000000000002D2",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T14:03:34.768991",
		actualBalance: -236,
		availableBalance: -242,
		rowType: "summary",
		ids: {
			rowId: "R0000000000002D4",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1717",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T07:31:28.73273",
		actualBalance: -236,
		availableBalance: -237,
		rowType: "summary",
		ids: {
			rowId: "R0000000000002CF",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******8107",
			createdBy: "lucym",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1,
				currency: "GBP",
			},
			transaction: {
				amount: -1,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-06-13T07:31:28.73273",
		actualBalance: -7483,
		availableBalance: -7507,
		rowType: "summary",
		ids: {
			rowId: "R000000000000273",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******8107",
			createdBy: "lucym",
		},
	},
]

const data2 = [
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1134,
				currency: "GBP",
			},
			transaction: {
				amount: -1134,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T10:06:42",
		actualBalance: 56358.26,
		availableBalance: 37862.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BD4",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******7299",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -196,
				currency: "GBP",
			},
			transaction: {
				amount: -196,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:49:35",
		actualBalance: 56358.26,
		availableBalance: 38996.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BD3",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******5780",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -111,
				currency: "GBP",
			},
			transaction: {
				amount: -111,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:44:09",
		actualBalance: 56358.26,
		availableBalance: 39192.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BD2",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******1664",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -438,
				currency: "GBP",
			},
			transaction: {
				amount: -438,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:41:36",
		actualBalance: 56358.26,
		availableBalance: 39303.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BD1",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******9511",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -820,
				currency: "GBP",
			},
			transaction: {
				amount: -820,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:23:53",
		actualBalance: 56358.26,
		availableBalance: 39741.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BD0",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******9115",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -610.92,
				currency: "GBP",
			},
			transaction: {
				amount: -610.92,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:17:35",
		actualBalance: 56358.26,
		availableBalance: 40561.92,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCF",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******7876",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -627.92,
				currency: "GBP",
			},
			transaction: {
				amount: -627.92,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:03:02",
		actualBalance: 56358.26,
		availableBalance: 41172.84,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCE",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******7792",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -196,
				currency: "GBP",
			},
			transaction: {
				amount: -196,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T09:02:22",
		actualBalance: 56358.26,
		availableBalance: 41800.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCD",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******4104",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -196,
				currency: "GBP",
			},
			transaction: {
				amount: -196,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T08:58:11",
		actualBalance: 56358.26,
		availableBalance: 41996.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCC",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******5605",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -83,
				currency: "GBP",
			},
			transaction: {
				amount: -83,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T08:55:36",
		actualBalance: 56358.26,
		availableBalance: 42192.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCB",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******1988",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -170,
				currency: "GBP",
			},
			transaction: {
				amount: -170,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-12T08:52:45",
		actualBalance: 56358.26,
		availableBalance: 42275.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BCA",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******0264",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -537.02,
				currency: "GBP",
			},
			transaction: {
				amount: -537.02,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T18:56:40",
		actualBalance: 67560.62,
		availableBalance: 42445.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC9",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1613",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1890.98,
				currency: "GBP",
			},
			transaction: {
				amount: -1890.98,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T16:51:21",
		actualBalance: 67560.62,
		availableBalance: 42982.78,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC8",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******4034",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -196,
				currency: "GBP",
			},
			transaction: {
				amount: -196,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T16:01:02",
		actualBalance: 67560.62,
		availableBalance: 44873.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC7",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******3422",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -50,
				currency: "GBP",
			},
			transaction: {
				amount: -50,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T15:58:28",
		actualBalance: 67560.62,
		availableBalance: 45069.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC6",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******0541",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -50,
				currency: "GBP",
			},
			transaction: {
				amount: -50,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T15:55:22",
		actualBalance: 67560.62,
		availableBalance: 45119.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC5",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******5141",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -1404,
				currency: "GBP",
			},
			transaction: {
				amount: -1404,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T15:14:05",
		actualBalance: 67560.62,
		availableBalance: 45169.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC4",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******1164",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -606,
				currency: "GBP",
			},
			transaction: {
				amount: -606,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T14:31:55",
		actualBalance: 67560.62,
		availableBalance: 46573.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC3",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******4293",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -590,
				currency: "GBP",
			},
			transaction: {
				amount: -590,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T13:55:44",
		actualBalance: 67560.62,
		availableBalance: 47179.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC2",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487184******0747",
			createdBy: "christofferj",
		},
	},
	{
		actionType: "AUTHORISATION",
		amount: {
			billing: {
				amount: -196,
				currency: "GBP",
			},
			transaction: {
				amount: -196,
				currency: "GBP",
			},
			fxRate: 1,
		},
		bookingInfo: {
			format: "summary",
			version: 1,
			leadPassengerName: "PassengerName",
			agentBookingReference: "BookingReference",
		},
		postedDate: "2022-10-11T13:23:44",
		actualBalance: 67560.62,
		availableBalance: 47769.76,
		rowType: "summary",
		ids: {
			rowId: "R000000000003BC1",
			providerCode: "modulr",
			providerCardId: "ProviderCardId",
			orderId: "OrderId",
		},
		card: {
			cardNumber: "487185******6139",
			createdBy: "christofferj",
		},
	},
]
