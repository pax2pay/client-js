import { BeneficiaryResponse } from "./BeneficiaryResponse"

describe("BeneficiaryResponse", () => {
	it.each([
		[{}, false],
		[null, false],
		[
			{
				transferDestination: {
					iban: "DE89370400440532013000",
					bic: "DEUTDEDBFRA",
					type: "IBAN",
					currency: "EUR",
				},
				status: "ACTIVE",
				name: "Jane Doe",
				beneficiaryId: "B12345",
				createdOn: "2023-10-01T00:00:00Z",
			},
			true,
		],
		[
			{
				transferDestination: {
					iban: "DE89370400440532013000",
					bic: "DEUTDEDBFRA",
					type: "IBAN",
					currency: "EUR",
				},
				status: "ACTIVE",
				name: "John Doe",
				beneficiaryId: "B12345",
				createdOn: "2023-10-01T00:00:00Z",
				defaultReference: "Ref123",
				fullName: "Johnathan Doe",
				history: [],
			},
			true,
		],
	])("BeneficiaryResponse.is", (beneficiary: any, valid: boolean) => {
		expect(BeneficiaryResponse.is(beneficiary)).toBe(valid)
	})
})
