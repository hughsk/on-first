# on-first [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Attach an EventEmitter listener that emits before all other existing listeners
for that event.

Note: it's also worth checking out [timoxley](http://github.com/timoxley)'s
[overshadow-listeners](http://github.com/timoxley/overshadow-listeners/). The
API offers more flexibility, and unlike `on-first` only uses the public
EventEmitter API.

## Usage ##

[![on-first](https://nodei.co/npm/on-first.png?mini=true)](https://nodei.co/npm/on-first)

#### `require('on-first')(emitter, event, listener)` ####

* `emitter` is the EventEmitter to listen to.
* `event` is the event to listen to.
* `listener` is the event callback.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/on-first/blob/master/LICENSE.md) for details.
