import selectAll from './selectAll'
import lazyRange from './lazyRange'

export default (..._) => selectAll(lazyRange(..._))
