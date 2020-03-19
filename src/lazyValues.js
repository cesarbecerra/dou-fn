export default function* lazyValues(o) {
  for (const key in obj) yield obj[key]
}
