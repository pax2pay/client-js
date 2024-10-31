import { OrganisationCreateRequest } from "./OrganisationCreateRequest"

describe("OrganisationCreateRequest", () => {
	it("is", () => {
		expect(OrganisationCreateRequest.is({ status: "INACTIVE", code: "somecode" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", code: "somecode" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", status: "INACTIVE" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", status: "INACTIVE", code: "somecode" })).toBeTruthy()
	})
})
