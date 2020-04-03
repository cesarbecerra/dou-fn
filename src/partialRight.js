export default (fn, ...a) => (...b) => fn.apply(null, [...b, ...a])
