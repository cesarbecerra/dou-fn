import canIterate from './canIterate'

export default i => (canIterate(i) ? i[Symbol.iterator]() : (function*() {})())
