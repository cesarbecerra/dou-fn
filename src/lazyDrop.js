import currying from './currying'
import lazyFilter from './lazyFilter'

export default currying((f, iterable) => {
  let i = 0
  return lazyFilter(_ => ++i > f, iterable)
})
