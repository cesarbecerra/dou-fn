import call from './call'
import reduce from './reduce'

export default (fn, ...fns) => (v, ...vs) => call(reduce(call, fn(v, ...vs), fns), _ => v)
