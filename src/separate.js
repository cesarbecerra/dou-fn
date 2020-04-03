import currying from './currying'

export default currying((del = '', s) => s.split(del))
