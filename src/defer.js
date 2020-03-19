import currying from './currying'

export default currying((time, arg) => new Promise(resolve => setTimeout(() => resolve(arg), time)))
