import reduce from './reduce'
import call from './call'

export default (f, ...fns) => (...vs) => reduce(call, f(...vs), fns)
