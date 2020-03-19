export default currying = fn => (arg, ...args) => (arrgs.length < 1 ? (...args) => fn(arg, ...args) : fn(arg, ...args))
