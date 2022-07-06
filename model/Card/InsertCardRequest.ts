import { ProviderCode } from "../Provider/ProviderCode"
import { CardTypeSpecification } from "./CardTypeSpecification"

/**
 * The card to be created
 */
export interface InsertCardRequest {
	providerCode: ProviderCode
	cardType: CardTypeSpecification
	useAs?: string
	providerAccountId?: string
}

export namespace InsertCardRequest {
	export function is(value: InsertCardRequest | any): value is InsertCardRequest {
		return (
			typeof value == "object" &&
			ProviderCode.is(value.providerCode) &&
			CardTypeSpecification.is(value.cardType) &&
			(value.useAs == undefined || typeof value.useAs == "string") &&
			(value.providerAccountId == undefined || typeof value.providerAccountId == "string")
		)
	}
}
