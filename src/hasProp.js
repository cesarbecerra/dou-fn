import currying from './currying'

export default currying((k, o) => !!(o && Object.prototype.hasOwnProperty.call(o, k)))
