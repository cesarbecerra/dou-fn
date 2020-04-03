import currying from './currying'
import selectAll from './selectAll'
import lazyFilter from './lazyFilter'

export default currying((_, i) => selectAll(lazyFilter(_, i)))
