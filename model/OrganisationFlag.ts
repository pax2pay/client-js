import { isly } from "isly"

export type OrganisationFlag = typeof OrganisationFlag.types[number]

export namespace OrganisationFlag {
	export const types = [
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
		"TRAVEL_CENTRES",
		"THE_CRUISE_LINE",
	] as const
	export const type = isly.string(types)
	export const is = type.is
}
