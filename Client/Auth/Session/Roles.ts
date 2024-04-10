import { SessionVariable } from "./SessionVariable"

export class Roles implements SessionVariable<"roles", string[]> {
	key = "roles" as const
	fromString(v: string | undefined): string[] | undefined {
		return v?.split(",")
	}
	toString(v: string[]) {
		return v.join(",")
	}
}
