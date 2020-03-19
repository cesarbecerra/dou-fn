import currying from './currying'
import call from './call'
import reduce from './reduce'

export default currying((fn, i) =>
  call(
    reduce((_, arg) => fn(arg), null, i),
    _ => i
  )
)
