export default function* lazyRange(init = 0, end = init, track = 1) {
  if (arguments.length === 1) init = 0
  while (init < end) {
    yield init
    init += track
  }
}
