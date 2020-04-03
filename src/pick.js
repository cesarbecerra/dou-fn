import currying from './currying'
import perform from './perform'
import lazyEntries from './lazyEntries'
import lazyFilter from './lazyFilter'
import object from './object'

export default currying((keys, _) =>
  perform(
    _,
    lazyEntries,
    lazyFilter(([key]) => keys.includes(key)),
    object
  )
)
