import reduce from './reduce'
import call from './call'

export default (...f) => reduce(call, f)
