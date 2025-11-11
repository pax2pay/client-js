import { ReportFileDestination } from "./ReportFileDestination"

describe("ReportFileDestination", () => {
	it("is", () => {
		expect(
			ReportFileDestination.is({
				destinationType: "EMAIL",
				to: ["lucy.meachem@pax2pay.com"],
			})
		).toBeTruthy()
		expect(
			ReportFileDestination.is({
				destinationType: "SFTP",
				host: "terst.test.com",
				user: "debian",
				port: 42069,
				password: "********",
				path: "/home/debian/testreports",
			})
		).toBeTruthy()
		expect(ReportFileDestination.is({ destinationType: "email" })).toBeFalsy()
		expect(ReportFileDestination.is({ destinationType: "EMAIL", host: "terst.test.com" })).toBeFalsy()
	})
})
