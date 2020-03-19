export default function* lazyObjectKeys(obj) {
  for (const key in obj) yield key
}
