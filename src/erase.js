import currying from './currying'
import call from './call'

export default currying((k, o) => call({}, r => (delete Object.assign(r, o)[k], r)))
