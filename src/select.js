import currying from './currying'
import toIterable from './toIterable'
import promiseCheck from './promiseCheck'
import nop from './nop'

export default currying((_, iterator) => {
  if (_ === 0) return []
  let r = []
  iterator = toIterable(iterator)
  return (function recursivity() {
    let c
    while (!(c === iterator.next()).done) {
      const v = c.value
      if (promiseCheck(v)) {
        return v
          .then(v => ((r.push(v), r).length == _ ? r : recursivity()))
          .catch(e => (e == nop ? recursivity() : Promise.reject(e)))
      }
      r.push(v)
      if (r.length == _) return r
    }
    return r
  })()
})
