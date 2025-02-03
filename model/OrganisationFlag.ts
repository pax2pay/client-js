import { isly } from "isly"

export type OrganisationFlag = typeof OrganisationFlag.types[number]

export namespace OrganisationFlag {
	export const types = [
		"PAXFAB",
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
		"TRAVEL_CENTRE",
		"THE_CRUISE_LINE",
		"EHOTEL",
	] as const
	export const type = isly.string(types)
	export const is = type.is
}
