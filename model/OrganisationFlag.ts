const organisationFlag = [
	"SABRE",
	"EEA_CUSTOMER",
	"PAX2PAY_DIRECT",
	"VOXEL",
	"HITCHHIKER",
	"YPSILON",
	"CONFERMA",
	"NET_STORMING",
	"AGENDAS_GROUP",
	"SABRE_REFERRAL",
	"TTS",
	"SOFTCONEX",
	"PANASOFT",
] as const
export type OrganisationFlag = typeof organisationFlag[number]

export namespace OrganisationFlag {
	export function is(value: unknown): value is OrganisationFlag {
		return typeof value == "string" && organisationFlag.includes(value as OrganisationFlag)
	}
}
