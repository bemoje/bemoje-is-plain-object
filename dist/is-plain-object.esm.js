/**
 * True if value is a plain object.
 * @param {*} value - The value to evaluate
 * @returns {boolean} boolean
 */
function isPlainObject(value) {
	// check for null/void values and Obj.prot.toString
	if (!value || Object.prototype.toString.call(value) !== '[object Object]') {
		return false
	}

	// Non-own-constructor-property must be Object
	if (
		value.constructor &&
		!Object.prototype.hasOwnProperty.call(value, 'constructor') &&
		!(
			value.constructor &&
			value.constructor.prototype &&
			Object.prototype.hasOwnProperty.call(
				value.constructor.prototype,
				'isPrototypeOf',
			)
		)
	) {
		return false
	}

	// Own properties are enumerated firstly, so to speed up, if last one is one of its own properties, then all properties are its own.
	let key;
	for (key in value) {
	}

	// return true if exists and is own prop
	return (
		typeof key === 'undefined' ||
		Object.prototype.hasOwnProperty.call(value, key)
	)
}

export default isPlainObject;
