import { Auth } from "./index"

describe("Auth.trust", () => {
	it("forwards the turnstile token as the cf-turnstile-response header", async () => {
		const post = jest.fn().mockResolvedValue({})
		const auth = Auth.create({ post } as any)

		await auth.trust("turnstile-token-123")

		expect(post).toHaveBeenCalledWith("auth/trust", undefined, undefined, {
			"cf-turnstile-response": "turnstile-token-123",
		})
	})
})
