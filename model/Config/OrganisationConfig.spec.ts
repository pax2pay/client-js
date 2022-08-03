import * as model from "../index"
const testvalue = {
	inboundTransferConfig: {
		enabled: true,
		emails: ["dfsdfsdfsdfs@gmail.com", "yiuyi@kjhk.com", "test@test.com"],
	},
	fundingLimitConfig: {
		type: "ON_THRESHOLD",
		limits: {},
	},
	cardDeliveryEmailConfig: {
		contactEmail: "e@mail.com",
		contactPhoneNumber: "+44 123 3546 123",
	},
}

const testvalue2 = {
	showDefaultRolesets: true,
	defaultModulrUsage: "MULTIPLE_USE",
	cardTypes: {
		useLegacyCardTypesInResponse: true,
	},
	inboundTransferConfig: {
		enabled: false,
	},
	fundingLimitConfig: {
		type: "ON_THRESHOLD",
		limits: {
			modulr: {
				A217G5VY: {
					emails: ["test@test.com"],
					limit: 10000,
				},
			},
		},
	},
}

describe("model.OrganisationConfig", () =>
	it("is", () => {
		expect(model.Config.OrganisationConfig.is(testvalue)).toBeTruthy()
		expect(model.Config.OrganisationConfig.is(testvalue2)).toBeTruthy()
	}))
