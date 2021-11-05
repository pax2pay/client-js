export type Sorting<T extends { [key: string]: any } = { [key: string]: any }> =
	| keyof T
	| {
			property: keyof T
			direction?: "ascending" | "descending"
	  }
