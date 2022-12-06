import { ErrorMessageDto } from "./ErrorMessageDto"
import { ErrorResponse } from "./ErrorResponse"

describe("ErrorResponse", () => {
	it("is 503", async () => {
		expect(ErrorResponse.is({ code: 503, errors: [{ message: "Service unavailable" }] })).toBeTruthy()
	})
	it("should return true for valid error response objects", () => {
		const validErrorResponse = {
			code: 500,
			errors: [
				{
					field: "username",
					value: "",
					message: "Username is required",
				},
				{
					field: "password",
					value: "",
					message: "Password is required",
				},
			],
		}
		expect(ErrorResponse.is(validErrorResponse)).toBe(true)
	})

	it("should return false for invalid error response objects", () => {
		const invalidErrorResponse1 = {
			code: "500", // invalid type for code property
			errors: [
				{
					field: "username",
					value: "",
					message: "Username is required",
				},
				{
					field: "password",
					value: "",
					message: "Password is required",
				},
			],
		}
		expect(ErrorResponse.is(invalidErrorResponse1)).toBe(false)

		const invalidErrorResponse2 = {
			code: 500,
			errors: [
				{
					field: "username",
					value: "",
					message: "Username is required",
				},
				{
					field: 123, // invalid type for field property
					value: "",
					message: "Password is required",
				},
			],
		}
		expect(ErrorResponse.is(invalidErrorResponse2)).toBe(false)
	})
})

describe("ErrorMessageDto", () => {
	it("should return true for valid error message DTO objects", () => {
		const validErrorMessageDto = {
			field: "username",
			value: "",
			message: "Username is required",
		}
		expect(ErrorMessageDto.is(validErrorMessageDto)).toBe(true)
	})
})
