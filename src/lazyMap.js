import currying from './currying'
import toIterable from './toIterable'
import call from './call'

export default currying(function* lazyMap(x, i) {
  for (const _ of toIterable(i)) yield call(_, x)
})
