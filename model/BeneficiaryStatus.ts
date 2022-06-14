const beneficiaryStatus = ["ACTIVE", "DELETED", "OUTDATED"] as const

export type BeneficiaryStatus = typeof beneficiaryStatus[number]

export namespace BeneficiaryStatus {
	export function is(value: unknown): value is BeneficiaryStatus {
		return typeof value == "string" && beneficiaryStatus.includes(value as BeneficiaryStatus)
	}
}
