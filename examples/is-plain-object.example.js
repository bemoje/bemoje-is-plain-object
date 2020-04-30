import isPlainObject from '../src/is-plain-object'

isPlainObject({})
//=> true

isPlainObject({ a: 1 })
//=> true

isPlainObject(Object.create(null))
//=> false

isPlainObject(/regex/)
//=> false
