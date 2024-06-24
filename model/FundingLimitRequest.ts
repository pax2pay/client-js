import { isly } from "isly"

export interface FundingLimitRequest {
	email: string[]
	limit: number
}
export namespace FundingLimitRequest {
	export const type = isly.object<FundingLimitRequest>({
		email: isly.string().array({ criteria: "minLength", value: 1 }),
		limit: isly.number(),
	})
	export const is = type.is
}
