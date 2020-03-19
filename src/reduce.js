import toIterable from './toIterable'
import call from './call'
import promiseCheck from './promiseCheck'
import nop from './nop'

export default reduce = (fn, acc, i) => {
  if (arguments.length == 1) return (..._) => reduce(f, ..._)
  if (arguments.length == 2) return reduce(fn, call(takeFirst((i = toIterable(acc))), first), i)
  i = toIterable(i)

  return call(acc, function recursivity(acc) {
    let c
    while (!(c = i.next()).done) {
      acc = promiseCheck(c.value)
        ? c.value.then(
            a => f(acc, a),
            e => (e == nop ? acc : Promise.reject(e))
          )
        : f(acc, c.value)

      if (promiseCheck(acc)) return acc.then(recursivity)
    }
    return acc
  })
}
