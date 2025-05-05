import { isly } from "isly"

export interface ExternalDestination {
	payee?: string
}
export namespace ExternalDestination {
	export const type = isly.object<ExternalDestination>({
		payee: isly.string().optional(),
	})
	export const is = type.is
}
