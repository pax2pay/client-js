import { Connection } from "./Connection"

describe("Connection.download", () => {
	const fetch = jest.spyOn(globalThis, "fetch")
	beforeAll(() => {
		Object.assign(globalThis, { window: { localStorage: { getItem: () => null, setItem: () => undefined } } })
	})
	afterAll(() => {
		fetch.mockRestore()
		delete (globalThis as any).window
	})
	it("returns a successful JSON document as a Blob", async () => {
		fetch.mockResolvedValue(
			new Response('{"name":"document"}', { status: 200, headers: { "Content-Type": "application/json" } })
		)
		const result = await Connection.open("https://example.com", undefined).download("documents/D0000001/content")
		expect(result).toBeInstanceOf(Blob)
		expect(await (result as Blob).text()).toEqual('{"name":"document"}')
	})
	it("parses an error response", async () => {
		fetch.mockResolvedValue(
			new Response('{"code":404,"errors":[{"message":"Not found"}]}', {
				status: 404,
				headers: { "Content-Type": "application/json" },
			})
		)
		const result = await Connection.open("https://example.com", undefined).download("documents/D0000001/content")
		expect(result).toEqual({ status: 404, code: 404, errors: [{ message: "Not found" }] })
	})
})
