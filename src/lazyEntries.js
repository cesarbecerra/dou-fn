export default function* lazyEntries(o) {
  for (const key in o) yield [key, o[key]]
}
