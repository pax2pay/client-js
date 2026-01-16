import { isly } from "isly"
import { ProviderCode } from "../ProviderCode"

export type Credentials = Partial<Record<ProviderCode, Record<string, any>>> & {
	pax2pay?: Credentials.Pax2Pay
}
export namespace Credentials {
	export const type = isly.record(ProviderCode.type, isly.any())

	// Pax2PayBankingCredentials in mpay
	export type Pax2Pay = {
		cardHolderName: string
		organisationId: string
	}
	export namespace Pax2Pay {
		export const keys: (keyof Pax2Pay)[] = ["cardHolderName", "organisationId"]
		export const type = isly.object<Pax2Pay>({
			cardHolderName: isly.string(),
			organisationId: isly.string(),
		})
	}
}
