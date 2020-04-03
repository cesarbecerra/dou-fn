import currying from './currying'
import perform from './perform'
import lazyFilter from './lazyFilter'
import selectFirst from './selectFirst'
import first from './first'

export default currying((_, i) => perform(i, lazyFilter(_), selectFirst, first))
