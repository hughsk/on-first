var EventEmitter = require('events').EventEmitter
var test = require('tape')
var first = require('./')

test('Two existing events', function(t) {
  var emitter = new EventEmitter
  var n = 0

  emitter.on('data', function b() {
    t.equal(n++, 1)
  })

  emitter.on('data', function c() {
    t.equal(n++, 2)
    t.end()
  })

  first(emitter, 'data', function a() {
    t.equal(n++, 0)
  })

  emitter.emit('data')
})

test('One existing event', function(t) {
  var emitter = new EventEmitter
  var n = 0

  emitter.on('data', function b() {
    t.equal(n++, 1)
    t.end()
  })

  first(emitter, 'data', function a() {
    t.equal(n++, 0)
  })

  emitter.emit('data')
})

test('Successive events', function(t) {
  var emitter = new EventEmitter
  var n = 0

  first(emitter, 'data', function a() {
    t.equal(n++, 0)
  })

  emitter.on('data', function b() {
    t.equal(n++, 1)
  })

  emitter.on('data', function c() {
    t.equal(n++, 2)
    t.end()
  })

  emitter.emit('data')
})
