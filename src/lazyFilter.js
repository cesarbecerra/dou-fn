import currying from './currying'
import call from './call'
import promiseCheck from './promiseCheck'
import nop from './nop'
import toIterable from './toIterable'

export default currying(function* lazyFilter(fn, iter) {
  for (const _ of toIterable(iter)) {
    const _iFn = call(_, fn)
    if (promiseCheck(_iFn)) yield _iFn.then(_iFn => (_iFn ? _ : Promise.reject(nop)))
    else yield _
  }
})
