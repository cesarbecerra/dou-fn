export default fn => (arg, ...args) => (args.length < 1 ? (...args) => fn(arg, ...args) : fn(arg, ...args))
