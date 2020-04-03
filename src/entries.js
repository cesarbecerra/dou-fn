import selectAll from './selectAll'
import lazyEntries from './lazyEntries'

export default o => selectAll(lazyEntries(o))
