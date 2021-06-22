import { User, performPurchase } from '../src/Exercicio1'

describe("Testing performPurchase", () => {
	test("Testing balance greater than value", () => {
		const user: User = {
			name: "Tadeu",
			balance: 1000
		}

		const result = performPurchase(user, 280)

		expect(result?.balance).toBeLessThan(user.balance)
	})

	test("Testing balance equal than value", () => {
		const user: User = {
			name: "Tadeu",
			balance: 1000
		}

		const result = performPurchase(user, 1000)

		expect(result?.balance).toEqual(0)
	})

	test("Testing balance less than value", () => {
		const user: User = {
			name: "Tadeu",
			balance: 100
		}

		const result = performPurchase(user, 280)

		expect(result).not.toBeDefined()
	})
})