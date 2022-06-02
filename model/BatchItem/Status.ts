export type Status = "imported" | "processing" | "aborted" | "sent" | { status: "failed"; reason: string }

export namespace Status {
	export function is(value: Status | any): value is Status {
		return (
			value == "imported" ||
			value == "processing" ||
			value == "sent" ||
			(typeof value == "object" && value.status == "failed" && typeof value.reason == "string")
		)
	}
}
