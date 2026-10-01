import { Connection } from "../Connection"
import { Documents } from "./index"

describe("Documents.download", () => {
	it("downloads the document content from documents/{id}/content", async () => {
		const blob = new Blob(["%PDF"], { type: "application/pdf" })
		const connection = { download: jest.fn().mockResolvedValue(blob) } as unknown as Connection
		const result = await Documents.create(connection).download("D0000001")
		expect(connection.download).toHaveBeenCalledWith("documents/D0000001/content")
		expect(result).toBe(blob)
	})
})
