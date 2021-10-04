import { mathExact } from "math-exact"
import * as model from "../../../model"

export function factory(card: Partial<model.CreateCardRequest>): [model.CreateCardRequest, model.CardResponseV2, model.CardResponse] {
	const result: model.CreateCardRequest = {
		cardType: {
			cardTypeId: "VISA_DEBIT_CORPORATE",
		},
		providerAccountId: "AAAAAAA",
		providerCode: "modulr",
		balance: 1,
		currency: "EUR",
		friendlyName: "test card",
		...card,
	}
	return [
		result,
		{
			cardType: result.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
<<<<<<< HEAD
			balance: result.providerCode == "modulr" ? mathExact("Add", result.balance, 1) : result.balance,
			issueDate: new Date().toISOString().slice(0,10),
=======
			balance: result.balance,
			issueDate: new Date().toJSON().slice(0,10),
>>>>>>> WIP started amend and freeze
			providerCardId: expect.any(String),
			providerCode: result.providerCode,
			usage: result.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: process.env.username,
		},
		{
			cardType: result.cardType.cardTypeId,
			cardNumber: expect.stringMatching(/\d{16}/),
			cvv: expect.stringMatching(/\d{3}/),
			expiryDate: expect.stringMatching(/\d{4}-\d{2}/),
			nameOnCard: expect.any(String),
<<<<<<< HEAD
			balance: result.providerCode == "modulr" ? mathExact("Add", result.balance, 2) : result.balance,
			issueDate: new Date().toISOString().slice(0,10),
=======
			balance: result.balance,
			issueDate: new Date().toJSON().slice(0,10),
>>>>>>> WIP started amend and freeze
			providerCardId: expect.any(String),
			providerCode: result.providerCode,
			usage: result.providerCode == "modulr" ? "SINGLE_USE_ALLOW_TEST_AUTH" : "SINGLE_USE",
			createdBy: expect.any(String),
			remainingBalance: result.providerCode == "modulr" ? mathExact("Add", result.balance, 2) : result.balance,
			cardForm: "GENERATABLE",
			state: "ACTIVE",
			cardAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
		        provider: expect.objectContaining({ 
		        	id: expect.any(Number), 
		        	code: result.providerCode, 
		        	name: expect.any(String), 
		        	status: 'ACTIVE' 
		        }),
		        organisation: { 
		        	code: expect.any(String), 
		        	name: expect.any(String), 
		        	status: 'ACTIVE' 
		        },
		        currency: result.currency,
		        state: 'ACTIVE',
		        friendlyName: expect.any(String),
		        balance: result.providerCode == "modulr" ? mathExact("Add", result.balance, 2) : result.balance,
		        accountType: 'CARD',
		        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
		        createdOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
			},
			fundingAccount: {
				id: expect.any(Number),
				providerAccountId: expect.any(String),
		        provider: { 
		        	id: expect.any(Number), 
		        	code: result.providerCode, 
		        	name: expect.any(String), 
		        	status: 'ACTIVE' 
		        },
		        organisation: { 
		        	code: expect.any(String), 
		        	name: expect.any(String), 
		        	status: 'ACTIVE' 
		        },
		        currency: result.currency,
		        state: 'ACTIVE',
		        friendlyName: expect.any(String),
		        balance: expect.any(Number),
		        accountType: 'FUNDING',
		        updatedOn: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/),
			},
			creatingSystem: expect.any(String),
<<<<<<< HEAD
		},
=======

		}
>>>>>>> WIP started amend and freeze
	]
}
