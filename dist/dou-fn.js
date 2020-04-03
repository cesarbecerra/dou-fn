/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./dou-fn.js
var dou_fn_namespaceObject = {};
__webpack_require__.r(dou_fn_namespaceObject);
__webpack_require__.d(dou_fn_namespaceObject, "add", function() { return add; });
__webpack_require__.d(dou_fn_namespaceObject, "arrayCheck", function() { return src_log; });
__webpack_require__.d(dou_fn_namespaceObject, "asyncPipe", function() { return asyncPipe; });
__webpack_require__.d(dou_fn_namespaceObject, "call", function() { return call; });
__webpack_require__.d(dou_fn_namespaceObject, "canIterate", function() { return canIterate; });
__webpack_require__.d(dou_fn_namespaceObject, "combine", function() { return combine; });
__webpack_require__.d(dou_fn_namespaceObject, "concurrencyFilter", function() { return concurrencyFilter; });
__webpack_require__.d(dou_fn_namespaceObject, "concurrencyMap", function() { return concurrencyMap; });
__webpack_require__.d(dou_fn_namespaceObject, "concurrencySelect", function() { return concurrencySelect; });
__webpack_require__.d(dou_fn_namespaceObject, "concurrencySelectAll", function() { return concurrencySelectAll; });
__webpack_require__.d(dou_fn_namespaceObject, "currying", function() { return currying; });
__webpack_require__.d(dou_fn_namespaceObject, "defer", function() { return defer; });
__webpack_require__.d(dou_fn_namespaceObject, "divide", function() { return divide; });
__webpack_require__.d(dou_fn_namespaceObject, "double", function() { return src_double; });
__webpack_require__.d(dou_fn_namespaceObject, "emptyCheck", function() { return emptyCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "entries", function() { return entries; });
__webpack_require__.d(dou_fn_namespaceObject, "erase", function() { return erase; });
__webpack_require__.d(dou_fn_namespaceObject, "exec", function() { return exec; });
__webpack_require__.d(dou_fn_namespaceObject, "filter", function() { return filter; });
__webpack_require__.d(dou_fn_namespaceObject, "first", function() { return first; });
__webpack_require__.d(dou_fn_namespaceObject, "functionCheck", function() { return functionCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "hasProp", function() { return hasProp; });
__webpack_require__.d(dou_fn_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(dou_fn_namespaceObject, "increment", function() { return increment; });
__webpack_require__.d(dou_fn_namespaceObject, "isOdd", function() { return isOdd; });
__webpack_require__.d(dou_fn_namespaceObject, "iteratorCheck", function() { return iteratorCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "join", function() { return join; });
__webpack_require__.d(dou_fn_namespaceObject, "last", function() { return last; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyDrop", function() { return lazyDrop; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyEntries", function() { return lazyEntries; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyFilter", function() { return src_lazyFilter; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyMap", function() { return src_lazyMap; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyObjectKeys", function() { return lazyObjectKeys; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyRange", function() { return lazyRange; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyReject", function() { return lazyReject; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyReverse", function() { return lazyReverse; });
__webpack_require__.d(dou_fn_namespaceObject, "lazyValues", function() { return lazyValues; });
__webpack_require__.d(dou_fn_namespaceObject, "log", function() { return src_log; });
__webpack_require__.d(dou_fn_namespaceObject, "map", function() { return map; });
__webpack_require__.d(dou_fn_namespaceObject, "nop", function() { return nop; });
__webpack_require__.d(dou_fn_namespaceObject, "not", function() { return not; });
__webpack_require__.d(dou_fn_namespaceObject, "object", function() { return object; });
__webpack_require__.d(dou_fn_namespaceObject, "objectKeys", function() { return objectKeys; });
__webpack_require__.d(dou_fn_namespaceObject, "oneByOne", function() { return oneByOne; });
__webpack_require__.d(dou_fn_namespaceObject, "partial", function() { return partial; });
__webpack_require__.d(dou_fn_namespaceObject, "partialRight", function() { return partialRight; });
__webpack_require__.d(dou_fn_namespaceObject, "perform", function() { return perform; });
__webpack_require__.d(dou_fn_namespaceObject, "pick", function() { return pick; });
__webpack_require__.d(dou_fn_namespaceObject, "pipe", function() { return pipe; });
__webpack_require__.d(dou_fn_namespaceObject, "promiseCheck", function() { return promiseCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "push", function() { return push; });
__webpack_require__.d(dou_fn_namespaceObject, "range", function() { return range; });
__webpack_require__.d(dou_fn_namespaceObject, "reduce", function() { return reduce; });
__webpack_require__.d(dou_fn_namespaceObject, "search", function() { return search; });
__webpack_require__.d(dou_fn_namespaceObject, "select", function() { return src_select; });
__webpack_require__.d(dou_fn_namespaceObject, "selectAll", function() { return selectAll; });
__webpack_require__.d(dou_fn_namespaceObject, "selectFirst", function() { return selectFirst; });
__webpack_require__.d(dou_fn_namespaceObject, "selectLast", function() { return selectLast; });
__webpack_require__.d(dou_fn_namespaceObject, "separate", function() { return separate; });
__webpack_require__.d(dou_fn_namespaceObject, "stringCheck", function() { return stringCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "toIterable", function() { return toIterable; });
__webpack_require__.d(dou_fn_namespaceObject, "toString", function() { return src_toString; });
__webpack_require__.d(dou_fn_namespaceObject, "undefinedCheck", function() { return undefinedCheck; });
__webpack_require__.d(dou_fn_namespaceObject, "values", function() { return values; });
__webpack_require__.d(dou_fn_namespaceObject, "wrap", function() { return wrap; });

// CONCATENATED MODULE: ./src/add.js
/* harmony default export */ var add = ((a, b) => a + b);

// CONCATENATED MODULE: ./src/log.js
const { log } = console

/* harmony default export */ var src_log = (log);

// CONCATENATED MODULE: ./src/asyncPipe.js
/* harmony default export */ var asyncPipe = ((...fns) => _ => fns.reduce(async (fn, curr) => curr(await fn), _));

// CONCATENATED MODULE: ./src/promiseCheck.js
/* harmony default export */ var promiseCheck = (_ => _ instanceof Promise);

// CONCATENATED MODULE: ./src/call.js


/* harmony default export */ var call = ((a, fn) => (promiseCheck(a) ? a.then(f) : fn(a)));

// CONCATENATED MODULE: ./src/canIterate.js
/* harmony default export */ var canIterate = (i => i != null && !!i[Symbol.iterator]);

// CONCATENATED MODULE: ./src/toIterable.js


/* harmony default export */ var toIterable = (i => (canIterate(i) ? i[Symbol.iterator]() : (function*() {})()));

// CONCATENATED MODULE: ./src/nop.js
/* harmony default export */ var nop = (Symbol.for('nop'));

// CONCATENATED MODULE: ./src/currying.js
/* harmony default export */ var currying = (fn => (arg, ...args) => (args.length < 1 ? (...args) => fn(arg, ...args) : fn(arg, ...args)));

// CONCATENATED MODULE: ./src/select.js





/* harmony default export */ var src_select = (currying((_, iterator) => {
  if (_ === 0) return []
  let data = []
  iterator = toIterable(iterator)
  return (function recursivity() {
    let c
    while (!(c = iterator.next()).done) {
      const v = c.value
      if (promiseCheck(v)) {
        return v
          .then(v => ((data.push(v), data).length == _ ? data : recursivity()))
          .catch(e => (e == nop ? recursivity() : Promise.reject(e)))
      }
      data.push(v)
      if (data.length == _) return data
    }
    return data
  })()
}));

// CONCATENATED MODULE: ./src/selectFirst.js


/* harmony default export */ var selectFirst = (i => src_select(1, i));

// CONCATENATED MODULE: ./src/first.js
/* harmony default export */ var first = (([_]) => _);

// CONCATENATED MODULE: ./src/reduce.js







function reduce(fn, acc, i) {
  if (arguments.length == 1) return (..._) => reduce(fn, ..._)
  if (arguments.length == 2) return reduce(fn, call(selectFirst((i = toIterable(acc))), first), i)
  i = toIterable(i)

  return call(acc, function recursivity(acc) {
    let c
    while (!(c = i.next()).done) {
      acc = promiseCheck(c.value)
        ? c.value.then(
            a => fn(acc, a),
            e => (e == nop ? acc : Promise.reject(e))
          )
        : fn(acc, c.value)

      if (promiseCheck(acc)) return acc.then(recursivity)
    }
    return acc
  })
}

// CONCATENATED MODULE: ./src/perform.js



/* harmony default export */ var perform = ((...f) => reduce(call, f));

// CONCATENATED MODULE: ./src/lazyRange.js
function* lazyRange(init = 0, end = init, track = 1) {
  if (arguments.length === 1) init = 0
  while (init < end) {
    yield init
    init += track
  }
}

// CONCATENATED MODULE: ./src/lazyMap.js




/* harmony default export */ var src_lazyMap = (currying(function* lazyMap(x, i) {
  for (const _ of toIterable(i)) yield call(_, x)
}));

// CONCATENATED MODULE: ./src/selectAll.js


/* harmony default export */ var selectAll = (i => src_select(Infinity, i));

// CONCATENATED MODULE: ./src/combine.js





/* harmony default export */ var combine = ((_, v) =>
  perform(
    lazyRange(_.length || v.length),
    src_lazyMap(i => [_[i], v[i]]),
    selectAll
  ));

// CONCATENATED MODULE: ./src/concurrencySelect.js




/* harmony default export */ var concurrencySelect = (currying((l, i) => src_select(l, [...i].forEach(promiseCheck ? v.catch(function() {}) : v))));

// CONCATENATED MODULE: ./src/concurrencySelectAll.js


/* harmony default export */ var concurrencySelectAll = (concurrencySelect(Infinity));

// CONCATENATED MODULE: ./src/lazyFilter.js






/* harmony default export */ var src_lazyFilter = (currying(function* lazyFilter(fn, i) {
  for (const _ of toIterable(i)) {
    const _iFn = call(_, fn)
    if (promiseCheck(_iFn)) yield _iFn.then(_iFn => (_iFn ? _ : Promise.reject(nop)))
    else if (_iFn) yield _
  }
}));

// CONCATENATED MODULE: ./src/concurrencyFilter.js




/* harmony default export */ var concurrencyFilter = (currying((fn, i) => concurrencySelectAll(src_lazyFilter(fn, i))));

// CONCATENATED MODULE: ./src/concurrencyMap.js




/* harmony default export */ var concurrencyMap = (currying((fn, i) => concurrencySelectAll(src_lazyMap(fn, i))));

// CONCATENATED MODULE: ./src/defer.js


/* harmony default export */ var defer = (currying((time, arg) => new Promise(resolve => setTimeout(() => resolve(arg), time))));

// CONCATENATED MODULE: ./src/divide.js
/* harmony default export */ var divide = ((v1, v2) => v1 / v2);

// CONCATENATED MODULE: ./src/double.js
/* harmony default export */ var src_double = (v => v * 2);

// CONCATENATED MODULE: ./src/emptyCheck.js
/* harmony default export */ var emptyCheck = ((_ = []) => !_.length);

// CONCATENATED MODULE: ./src/lazyEntries.js
function* lazyEntries(o) {
  for (const key in o) yield [key, o[key]]
}

// CONCATENATED MODULE: ./src/entries.js



/* harmony default export */ var entries = (o => selectAll(lazyEntries(o)));

// CONCATENATED MODULE: ./src/erase.js



/* harmony default export */ var erase = (currying((k, o) => call({}, r => (delete Object.assign(r, o)[k], r))));

// CONCATENATED MODULE: ./src/exec.js



/* harmony default export */ var exec = ((fn, ...fns) => (v, ...vs) => call(reduce(call, fn(v, ...vs), fns), _ => v));

// CONCATENATED MODULE: ./src/filter.js




/* harmony default export */ var filter = (currying((_, i) => selectAll(src_lazyFilter(_, i))));

// CONCATENATED MODULE: ./src/functionCheck.js
/* harmony default export */ var functionCheck = (f => typeof f == 'function');

// CONCATENATED MODULE: ./src/hasProp.js


/* harmony default export */ var hasProp = (currying((k, o) => !!(o && Object.prototype.hasOwnProperty.call(o, k))));

// CONCATENATED MODULE: ./src/identity.js
/* harmony default export */ var identity = (_ => _);

// CONCATENATED MODULE: ./src/increment.js
/* harmony default export */ var increment = (v => v + 1);

// CONCATENATED MODULE: ./src/isOdd.js
/* harmony default export */ var isOdd = (v => v % 2);

// CONCATENATED MODULE: ./src/iteratorCheck.js
/* harmony default export */ var iteratorCheck = (i => i != null && !!i[Symbol.iterator]);

// CONCATENATED MODULE: ./src/join.js



/* harmony default export */ var join = (currying((del = ',', i) => reduce((acc, _) => `${acc}${del}${_}`, i)));

// CONCATENATED MODULE: ./src/last.js
/* harmony default export */ var last = ((_ = []) => _[_.length - 1]);

// CONCATENATED MODULE: ./src/lazyDrop.js



/* harmony default export */ var lazyDrop = (currying((f, iterable) => {
  let i = 0
  return src_lazyFilter(_ => ++i > f, iterable)
}));

// CONCATENATED MODULE: ./src/lazyObjectKeys.js
function* lazyObjectKeys(obj) {
  for (const key in obj) yield key
}

// CONCATENATED MODULE: ./src/not.js
/* harmony default export */ var not = (arg => !arg);

// CONCATENATED MODULE: ./src/lazyReject.js





/* harmony default export */ var lazyReject = (currying((fn, i) => src_lazyFilter(arg => call(fn(arg), not), i)));

// CONCATENATED MODULE: ./src/lazyReverse.js
function* lazyReverse(arr) {
  let arrL = arr.length
  while (arrL--) yield arr[arrL]
}

// CONCATENATED MODULE: ./src/lazyValues.js
function* lazyValues(o) {
  for (const key in obj) yield obj[key]
}

// CONCATENATED MODULE: ./src/map.js




/* harmony default export */ var map = (currying((_, i) => selectAll(src_lazyMap(_, i))));

// CONCATENATED MODULE: ./src/object.js


/* harmony default export */ var object = (i => reduce((o, [k, v]) => ((o[k] = v), o), {}, i));

// CONCATENATED MODULE: ./src/objectKeys.js



/* harmony default export */ var objectKeys = (_ => selectAll(lazyObjectKeys(_)));

// CONCATENATED MODULE: ./src/oneByOne.js




/* harmony default export */ var oneByOne = (currying((fn, i) =>
  call(
    reduce((_, arg) => fn(arg), null, i),
    _ => i
  )
));

// CONCATENATED MODULE: ./src/partial.js
/* harmony default export */ var partial = ((f, ..._) => f.bind(null, ..._));

// CONCATENATED MODULE: ./src/partialRight.js
/* harmony default export */ var partialRight = ((fn, ...a) => (...b) => fn.apply(null, [...b, ...a]));

// CONCATENATED MODULE: ./src/pick.js






/* harmony default export */ var pick = (currying((keys, _) =>
  perform(
    _,
    lazyEntries,
    src_lazyFilter(([key]) => keys.includes(key)),
    object
  )
));

// CONCATENATED MODULE: ./src/pipe.js



/* harmony default export */ var pipe = ((f, ...fns) => (...vs) => reduce(call, f(...vs), fns));

// CONCATENATED MODULE: ./src/push.js
/* harmony default export */ var push = ((arr, ...args) => [...arr, ...args]);

// CONCATENATED MODULE: ./src/range.js



/* harmony default export */ var range = ((..._) => selectAll(lazyRange(..._)));

// CONCATENATED MODULE: ./src/search.js






/* harmony default export */ var search = (currying((_, i) => perform(i, src_lazyFilter(_), selectFirst, first)));

// CONCATENATED MODULE: ./src/selectLast.js


/* harmony default export */ var selectLast = (i => src_select(1, i));

// CONCATENATED MODULE: ./src/separate.js


/* harmony default export */ var separate = (currying((del = '', s) => s.split(del)));

// CONCATENATED MODULE: ./src/stringCheck.js
/* harmony default export */ var stringCheck = (s => typeof s == 'string');

// CONCATENATED MODULE: ./src/toString.js
/* harmony default export */ var src_toString = (v => v.toString());

// CONCATENATED MODULE: ./src/undefinedCheck.js
/* harmony default export */ var undefinedCheck = (_ => _ === undefined);

// CONCATENATED MODULE: ./src/values.js



/* harmony default export */ var values = (v => selectAll(lazyValues(v)));

// CONCATENATED MODULE: ./src/wrap.js
/* harmony default export */ var wrap = (v => [v]);

// CONCATENATED MODULE: ./dou-fn.js


































































// CONCATENATED MODULE: ./browser.js

window.douFn = window._ = { ...dou_fn_namespaceObject }


/***/ })
/******/ ]);
//# sourceMappingURL=dou-fn.js.map