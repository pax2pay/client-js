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
		"DAVID_PETROVIC",
		"MICHAEL_KOVAS",
	] as const
	export const type = isly.string(types)
	export const is = type.is
	export function toDisplay(value: OrganisationFlag): string {
		if (value == "PAX2PAY_DIRECT")
			return "ppdirect"
		if (value == "NET_STORMING")
			return "net storming"
		if (value == "AGENDAS_GROUP")
			return "agendas group"
		if (value == "EEA_CUSTOMER")
			return "EEA"
		if (value == "TRAVEL_CENTRE")
			return "travel centre"
		if (value == "THE_CRUISE_LINE")
			return "the cruise line"
		if (value == "DAVID_PETROVIC")
			return "david petrovic"
		if (value == "MICHAEL_KOVAS")
			return "michael kovas"
		return value.toLowerCase()
	}
}
