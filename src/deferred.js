class Deferred {
  constructor (executor) {
    const obj = {}
    const promise = new Promise((resolve, reject) => {
      obj.resolve = resolve
      obj.reject = reject
      executor && executor(resolve, reject)
    })
    promise.done = false
    promise.resolve = (...args) => { promise.done = true; obj.resolve(...args) }
    promise.reject = (...args) => { promise.done = true; obj.reject(...args) }
    promise.cancel = promise.reject
    return promise
  }
}

export default Deferred
