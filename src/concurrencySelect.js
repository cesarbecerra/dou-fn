import currying from './currying'
import select from './select'
import promiseCheck from './promiseCheck'

export default currying((l, i) => select(l, [...i].forEach(promiseCheck ? v.catch(function() {}) : v)))
