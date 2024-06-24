import { isly } from "isly"

export interface FundingLimitRequest {
	email: string[]
	limit: number
}
export namespace FundingLimitRequest {
	export const type = isly.object<FundingLimitRequest>({
		email: isly.string(/\S+@\S+\.\S+/).array({ criteria: "minLength", value: 1 }),
		limit: isly.number(),
	})
	export const is = type.is
}
