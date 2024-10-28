import { OrganisationCreateRequest } from "./OrganisationCreateRequest"

describe("OrganisationCreateRequest", () => {
	it("is", () => {
		expect(OrganisationCreateRequest.is({ status: "inactive", code: "somecode" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", code: "somecode" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", status: "inactive" })).toBeFalsy()
		expect(OrganisationCreateRequest.is({ name: "somename", status: "inactive", code: "somecode" })).toBeTruthy()
	})
})
