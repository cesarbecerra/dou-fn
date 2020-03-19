export default function* lazyReverse(arr) {
  let arrL = arr.length
  while (arrL--) yield arr[arrL]
}
