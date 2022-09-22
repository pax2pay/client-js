import * as model from "../model"
import { ErrorResponse } from "../model/ErrorResponse"
import { Cards } from "./Cards"
import { Connection } from "./Connection"
import { Paginated } from "./Paginated"

jest.setTimeout(20000)

const testList: number[] = []
for (let i = 1; i <= 100; i++) {
	testList.push(i)
}

async function getFunction(page: number, size: number, sort?: string) {
	if (sort == "fail")
		return { code: 400, errors: [{ message: "requested failure" }] } as model.ErrorResponse

	const result = { list: testList.slice(page * size, page * size + size), totalCount: testList.length }
	if (sort == "desc")
		result.list = result.list.sort((a, b) => b - a)
	return result
}

//piggy backing on this class because it extends List
class TestCards extends Cards {
	async testGetNextPaginated(previous?: Paginated<number>, page?: number, size?: number, sort?: string) {
		return await this.getNextPaginated(previous, getFunction, undefined, page, size, sort)
	}
}

describe("List", () => {
	//need a connection to make a new Cards/TestCards
	const testCards: TestCards = new TestCards(Connection.open("asd", "qwe"))

	it("getNextPaginated in order", async () => {
		const first = await testCards.testGetNextPaginated()

		if (ErrorResponse.is(first)) {
			fail("Error getting first page")
		} else {
			const firstExpectedList: number[] = []
			for (let i = 1; i <= 20; i++) {
				firstExpectedList.push(i)
			}
			expect(first.data).toEqual(firstExpectedList)
			expect(first.endReached).toEqual(false)

			const second = await testCards.testGetNextPaginated(first)

			if (ErrorResponse.is(second)) {
				fail("Error getting second page")
			} else {
				const secondExpectedList: number[] = []
				for (let i = 21; i <= 40; i++) {
					secondExpectedList.push(i)
				}
				expect(second.data).toEqual(secondExpectedList)
				expect(second.endReached).toEqual(false)
			}
		}
	})

	it("getNextPaginated custom", async () => {
		const firstCustom = await testCards.testGetNextPaginated(undefined, 5, 5)

		if (ErrorResponse.is(firstCustom)) {
			fail("Error getting page")
		} else {
			const firstExpectedCustomList: number[] = []
			for (let i = 26; i <= 30; i++) {
				firstExpectedCustomList.push(i)
			}
			expect(firstCustom.data).toEqual(firstExpectedCustomList)
			expect(firstCustom.endReached).toEqual(false)
		}

		const secondCustom = await testCards.testGetNextPaginated(undefined, 2, 25)
		if (ErrorResponse.is(secondCustom)) {
			fail("Error getting page")
		} else {
			const secondExpectedCustomList: number[] = []
			for (let i = 51; i <= 75; i++) {
				secondExpectedCustomList.push(i)
			}
			expect(secondCustom.data).toEqual(secondExpectedCustomList)
			expect(secondCustom.endReached).toEqual(false)
		}
	})

	it("getNextPaginated with sort", async () => {
		const sorted = await testCards.testGetNextPaginated(undefined, undefined, undefined, "desc")

		if (ErrorResponse.is(sorted)) {
			fail("Error getting page")
		} else {
			const sortedExpectedList: number[] = []
			for (let i = 20; i >= 1; i--) {
				sortedExpectedList.push(i)
			}
			expect(sorted.data).toEqual(sortedExpectedList)
			expect(sorted.endReached).toEqual(false)
		}
	})

	it("getNextPaginated endReached", async () => {
		const lastPage = await testCards.testGetNextPaginated(undefined, 3, 30)

		if (ErrorResponse.is(lastPage)) {
			fail("Error getting page")
		} else {
			const lastPageExpectedList: number[] = []
			for (let i = 91; i <= 100; i++) {
				lastPageExpectedList.push(i)
			}
			expect(lastPage.data).toEqual(lastPageExpectedList)
			expect(lastPage.endReached).toEqual(true)
		}
	})
})
