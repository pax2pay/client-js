/**
 * If status is not SUCCESS, contains the errors
 */
export interface Issue {
	severity: "INFO" | "WARNING" | "ERROR" | "FATAL"
	message: string
}

export namespace Issue {
	export function is(value: Issue | any): value is Issue {
		return (
			typeof value == "object" &&
			(value.severity == "INFO" ||
				value.severity == "WARNING" ||
				value.severity == "ERROR" ||
				value.severity == "FATAL")
		)
	}
}
