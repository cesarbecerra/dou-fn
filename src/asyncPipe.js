export default (...fns) => _ => fns.reduce(async (fn, curr) => curr(await fn), _)
