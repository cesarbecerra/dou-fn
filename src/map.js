import currying from './currying'
import selectAll from './selectAll'
import lazyMap from './lazyMap'

export default currying((_, i) => selectAll(lazyMap(_, i)))
