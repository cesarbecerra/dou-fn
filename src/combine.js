import perform from './perform'
import lazyRange from './lazyRange'
import lazyMap from './lazyMap'
import selectAll from './selectAll'

export default (_, v) =>
  perform(
    lazyRange(_.length || v.length),
    lazyMap(i => [_[i], v[i]]),
    selectAll
  )
