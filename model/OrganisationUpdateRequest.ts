export interface OrganisationUpdateRequest {
	name: string
	status: "ACTIVE" | "DELETED"
}
