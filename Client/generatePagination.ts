import * as model from "../model"

export function generatePagination<T extends { [key: string]: any } = { [key: string]: any }>(
	page = 0,
	size = 20,
	sort: model.Sorting<T>[] = []
): string {
	const result = [
		...(page ? [`page=${page}`] : []),
		...(size ? [`size=${size}`] : []),
		...sort.map(s => `sort=${String(typeof s == "object" ? s + (s.direction == "descending" ? "desc" : "") : s)}`),
	].join("&")
	return result ? "?" + result : ""
}
