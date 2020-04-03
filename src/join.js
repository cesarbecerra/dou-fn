import currying from './currying'
import reduce from './reduce'

export default currying((del = ',', i) => reduce((acc, _) => `${acc}${del}${_}`, i))
