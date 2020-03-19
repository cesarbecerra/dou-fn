import currying from './currying'
import toIterable from './toIterable'
import call from './call'

export default currying(function* lazyMap(x, iterable) {
  for (const _ of toIterable(iterable)) yield call(_, x)
})
