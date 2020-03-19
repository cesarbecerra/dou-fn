import canIterate from './canIterate'

export default toIterable = i => (canIterate(i) ? i[Symbol.iterator]() : (function*() {})())
