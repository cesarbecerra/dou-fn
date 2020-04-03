import promiseCheck from './promiseCheck'

export default (a, fn) => (promiseCheck(a) ? a.then(f) : fn(a))
