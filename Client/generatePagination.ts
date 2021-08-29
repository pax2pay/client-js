import * as model from "../model"

export function generatePagination<T extends { [key: string]: any } = { [key: string]: any }>(
	page = 0,
	size = 20,
	sort: model.Sorting<T>[] = []
): string {
	const result = [
		...(page == 0 ? [`page=${page}`] : []),
		...(size == 20 ? [`size=${size}`] : []),
		...sort.map(s => `sort=${typeof s == "object" ? s + (s.direction == "descending" ? "desc" : "") : s}`),
	].join("&")
	return result ? "?" + result : ""
}
