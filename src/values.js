import selectAll from './selectAll'
import lazyValues from './lazyValues'

export default v => selectAll(lazyValues(v))
