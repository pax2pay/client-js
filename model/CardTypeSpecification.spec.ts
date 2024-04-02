import { CardTypeSpecification } from "./CardTypeSpecification"

describe("CardTypeSpecification", () => {
	it.each([
		[
			{
				cardTypeId: "V210011HFD",
				description: "someDescription",
				scheme: "VISA",
				funding: "PREPAID",
				flags: ["CORPORATE", "BUSINESS", "CONSUMER"],
				bin: "411111",
				providerCode: "modulr",
			},
			true,
		],
		[{}, true],
		[{ cardTypeId: 4 }, false],
		[{ description: false }, false],
		[{ scheme: "CARD-MASTER" }, false],
		[{ funding: "PRE-PAID" }, false],
		[{ flags: ["CORP", "BUS", "CONS"] }, false],
		[{ bin: true }, false],
		[{ providerCode: "modr" }, false],
	])("is", (input: any, truthy: boolean) => {
		expect(CardTypeSpecification.is(input)).toEqual(truthy)
	})
})
