import { InvokingSystem } from "./InvokingSystem"

describe("InvokingSystem", () => {
	it.each([
		["PORTAL", true],
		["PORTAL_2", true],
		["REST_API", true],
		["FAB", true],
		["REST_API_PORTAL", true],
		["REST_API_EXTERNAL", true],
		["SOAP_API_FAB", true],
		["SOAP_API_EXTERNAL", true],
		["CRON", true],
		["UNKNOWN", true],
		["UNDEFINED", true],
		["NOT_INCLUDED", false],
	])("is", (input: string, truthy: boolean) => {
		expect(InvokingSystem.is(input)).toEqual(truthy)
	})
})
