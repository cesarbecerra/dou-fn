import promiseCheck from "./promiseCheck";

export default call = (a, fn) => promiseCheck(a) ? a.then(f) : fn(a);