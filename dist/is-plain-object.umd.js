(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-object')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-object'], factory) :
	(global = global || self, global['is-plain-object'] = factory(global.isObject));
}(this, (function (isObject) { 'use strict';

	isObject = isObject && Object.prototype.hasOwnProperty.call(isObject, 'default') ? isObject['default'] : isObject;

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

	return isPlainObject;

})));
