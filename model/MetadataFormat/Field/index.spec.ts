import { MetadataFormat } from "../../../index"

describe("MetadataFieldRequest", () => {
	const valueFields: MetadataFormat.Field.Value[] = [
		{
			name: "field",
			type: "string",
			validation: {
				optional: true,
			},
		},
		{
			name: "field2",
			type: "string",
			validation: {
				optional: true,
			},
		},
		{
			name: "leadPassengerName",
			description: "Name of the lead passenger or guest",
			type: "string",
			validation: {
				optional: true,
				length: {
					max: 45,
				},
			},
		},
		{
			name: "adults",
			description: "Number of adults",
			type: "integer",
			validation: {
				optional: true,
				numeric: {
					min: 1,
				},
			},
		},
		{
			name: "children",
			description: "Number of children",
			type: "integer",
			validation: {
				optional: true,
				numeric: {
					min: 0,
				},
			},
		},
		{
			name: "infants",
			description: "Number of infants",
			type: "integer",
			validation: {
				optional: true,
				numeric: {
					min: 0,
				},
			},
		},
		{
			name: "checkIn",
			description: "Check in date",
			type: "date",
			validation: {
				optional: true,
			},
		},
		{
			name: "checkOut",
			description: "Check out date",
			type: "date",
			validation: {
				optional: true,
			},
		},
		{
			name: "hotelName",
			description: "Name of the hotel",
			type: "string",
			validation: {
				optional: true,
				length: {
					max: 45,
				},
			},
		},
	]
	const objectFields: MetadataFormat.Field.Object[] = [
		{
			name: "room",
			fields: [
				{
					name: "board",
					description: "Board type",
					type: "string",
					validation: {
						optional: true,
						enumerated: {
							caseSensitive: true,
							allowedValues: ["SC", "FB", "RO", "HB", "AI", "BB"],
						},
					},
				},
				{
					name: "name",
					description: "Name of the room",
					type: "string",
					validation: {
						optional: true,
					},
				},
			],
		},
	]
	const listFields: MetadataFormat.Field.List[] = [
		{
			name: "flightNumbers",
			description: "Flight numbers for this leg",
			contains: {
				name: "flight number",
				type: "string",
				validation: {
					regex: {
						pattern: "[A-Z0-9]{2,3}\\d{1,4}",
					},
				},
			},
			validation: {
				optional: true,
			},
		},
		{
			name: "flightNumbers",
			description: "Flight numbers for this leg",
			contains: {
				name: "flight number",
				type: "string",
				validation: {
					regex: {
						pattern: "[A-Z0-9]{2,3}\\d{1,4}",
					},
				},
			},
			validation: {
				optional: true,
			},
		},
	]
	it("Value.is", () => {
		expect(valueFields.every(MetadataFormat.Field.Value.is)).toBeTruthy()
		expect(objectFields.every(MetadataFormat.Field.Value.is)).toBeFalsy()
		expect(listFields.every(MetadataFormat.Field.Value.is)).toBeFalsy()
	})
	it("Object.is", () => {
		expect(valueFields.every(MetadataFormat.Field.Object.is)).toBeFalsy()
		expect(objectFields.every(MetadataFormat.Field.Object.is)).toBeTruthy()
		expect(listFields.every(MetadataFormat.Field.Object.is)).toBeFalsy()
	})
	it("List.is", () => {
		expect(valueFields.every(MetadataFormat.Field.List.is)).toBeFalsy()
		expect(objectFields.every(MetadataFormat.Field.List.is)).toBeFalsy()
		expect(listFields.every(MetadataFormat.Field.List.is)).toBeTruthy()
	})
	it("accepts every category the server sends", () => {
		const categorised = MetadataFormat.Field.ValueCategory.values.map(category => ({
			name: "field",
			type: "string",
			category,
		}))
		expect(categorised.every(MetadataFormat.Field.Value.is)).toBeTruthy()
	})
	it("accepts a category it does not know yet", () => {
		const passengers = {
			name: "passengers",
			fields: [
				{ name: "leadPassengerName", type: "string", category: "customer name" },
				{ name: "adults", type: "integer", category: "some future category" },
			],
		}
		expect(MetadataFormat.Field.Value.is(passengers.fields[1])).toBeTruthy()
		expect(MetadataFormat.Field.Object.is(passengers)).toBeTruthy()
		expect(MetadataFormat.Field.is(passengers)).toBeTruthy()
	})
	it("rejects a category that is not a string", () => {
		expect(MetadataFormat.Field.Value.is({ name: "adults", type: "integer", category: 3 })).toBeFalsy()
	})
	it("is", () => {
		expect(valueFields.every(MetadataFormat.Field.is)).toBeTruthy()
		expect(objectFields.every(MetadataFormat.Field.is)).toBeTruthy()
		expect(listFields.every(MetadataFormat.Field.is)).toBeTruthy()
	})
})
