export const pipe = (...fns) => fns.reduce((fn, curr) => (...args) => curr(fn(...args)))
