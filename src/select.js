import currying from './currying'
import toIterable from './toIterable'
import promiseCheck from './promiseCheck'
import nop from './nop'

export default currying((_, iterator) => {
  if (_ === 0) return []
  let data = []
  iterator = toIterable(iterator)
  return (function recursivity() {
    let c
    while (!(c = iterator.next()).done) {
      const v = c.value
      if (promiseCheck(v)) {
        return v
          .then(v => ((data.push(v), data).length == _ ? data : recursivity()))
          .catch(e => (e == nop ? recursivity() : Promise.reject(e)))
      }
      data.push(v)
      if (data.length == _) return data
    }
    return data
  })()
})
