import toIterable from './toIterable'
import call from './call'
import promiseCheck from './promiseCheck'
import nop from './nop'
import selectFirst from './selectFirst'
import first from './first'

export default function reduce(fn, acc, i) {
  if (arguments.length == 1) return (..._) => reduce(fn, ..._)
  if (arguments.length == 2) return reduce(fn, call(selectFirst((i = toIterable(acc))), first), i)
  i = toIterable(i)

  return call(acc, function recursivity(acc) {
    let c
    while (!(c = i.next()).done) {
      acc = promiseCheck(c.value)
        ? c.value.then(
            a => fn(acc, a),
            e => (e == nop ? acc : Promise.reject(e))
          )
        : fn(acc, c.value)

      if (promiseCheck(acc)) return acc.then(recursivity)
    }
    return acc
  })
}
