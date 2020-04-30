import isObject from '@bemoje/is-object';

/**
 * True if value is a plain object.
 * @param {*} value - The value to evaluate
 * @returns {boolean} boolean
 */
function isPlainObject(value) {
	// if value isnt an object
	if (!isObject(value)) {
		return false
	}

	// if has modified prototype
	if (Object.getPrototypeOf(value) !== Object.prototype) {
		return false
	}

	return true
}

export default isPlainObject;
