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

describe("Connection.remove", () => {
	let fetch: jest.SpiedFunction<typeof globalThis.fetch>
	beforeAll(() => {
		fetch = jest.spyOn(globalThis, "fetch")
		Object.assign(globalThis, { window: { localStorage: { getItem: () => null, setItem: () => undefined } } })
	})
	afterAll(() => {
		fetch.mockRestore()
		delete (globalThis as any).window
	})
	beforeEach(() => fetch.mockResolvedValue(new Response(null, { status: 204 })))
	it("asks the browser to keep the request alive when told to", async () => {
		await Connection.open("https://example.com", undefined).remove(
			"payments/invoice/D1",
			undefined,
			undefined,
			undefined,
			{
				keepalive: true,
			}
		)
		expect(fetch).toHaveBeenLastCalledWith(
			"https://example.com/payments/invoice/D1",
			expect.objectContaining({ method: "DELETE", keepalive: true })
		)
	})
	it("sends an ordinary request otherwise", async () => {
		await Connection.open("https://example.com", undefined).remove("payments/invoice/D1")
		expect(fetch).toHaveBeenLastCalledWith(
			"https://example.com/payments/invoice/D1",
			expect.objectContaining({ method: "DELETE", keepalive: undefined })
		)
	})
})
