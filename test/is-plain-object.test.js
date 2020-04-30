import isPlainObject from '../src/is-plain-object'

describe('isPlainObject', () => {
	test('empty obj', () => {
		expect(isPlainObject({})).toBe(true)
	})
	test('null proto obj', () => {
		expect(isPlainObject(Object.create(null))).toBe(false)
	})

	test('fake prototype', () => {
		const o = {}
		Object.setPrototypeOf(o, null)
		expect(isPlainObject(o)).toBe(false)
	})
	test('not object', () => {
		const o = 'str'
		expect(isPlainObject(o)).toBe(false)
	})
	test('non empty plain obj', () => {
		const o = { a: 3 }
		expect(isPlainObject(o)).toBe(true)
	})
	test('class instance', () => {
		class A {
			a() {}
		}

		expect(isPlainObject(new A())).toBe(false)
		expect(isPlainObject(/regex/)).toBe(false)
	})
})
