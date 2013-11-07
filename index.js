var EventEmitter = require('events').EventEmitter

module.exports = first

function first(emitter, name, listener) {
  var listeners = EventEmitter.listenerCount(emitter, name)

  if (!listeners) return emitter.on(name, listener)
  if (!Array.isArray(emitter._events[name])) {
    emitter._events[name] = [listener, emitter._events[name]]
  } else {
    emitter._events[name].unshift(listener)
  }

  return emitter
}
