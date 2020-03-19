import currying from './currying'
import lazyFilter from './lazyFilter'
import call from './call'
import not from './not'

export default currying((fn, i) => lazyFilter(arg => call(fn(arg), not), i))
