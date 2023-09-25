const omnisetupFlags = ["SABRE", "PAX2PAY_DIRECT"] as const
export type OmnisetupFlags = typeof omnisetupFlags[number]

export namespace OmnisetupFlags {
	export function is(value: unknown): value is OmnisetupFlags {
		return typeof value == "string" && omnisetupFlags.includes(value as OmnisetupFlags)
	}
}
