import { Connection } from "../Connection"
import { Payments } from "./index"

describe("Payments.draftFromInvoice", () => {
	it("posts the invoice as the multipart file part to payments/invoice", async () => {
		const connection = { post: jest.fn().mockResolvedValue({ document: "D0000001" }) } as unknown as Connection
		const file = new File(["%PDF"], "invoice.pdf", { type: "application/pdf" })
		const result = await Payments.create(connection).draftFromInvoice(file)
		const [path, body] = (connection.post as jest.Mock).mock.calls[0]
		expect(path).toEqual("payments/invoice")
		expect(body).toBeInstanceOf(FormData)
		expect((body.get("file") as File).name).toEqual("invoice.pdf")
		expect(result).toEqual({ document: "D0000001" })
	})
})
