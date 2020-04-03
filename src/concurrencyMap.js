import currying from './currying'
import concurrencySelectAll from './concurrencySelectAll'
import lazyMap from './lazyMap'

export default currying((fn, i) => concurrencySelectAll(lazyMap(fn, i)))
