import currying from './currying'
import concurrencySelectAll from './concurrencySelectAll'
import lazyFilter from './lazyFilter'

export default currying((fn, i) => concurrencySelectAll(lazyFilter(fn, i)))
