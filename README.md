# Hash Stream

Simple wrapper around `crypto.createHash()` for files and streams.

Same as [hash-stream](http://npmrepo.com/hash-stream) without the
Promise dependency

## Installation

```shell
$ npm install hash-stream-simple
```

## API

```js
var getHash = require('hash-stream-simple')
```

## getHash(filename || stream, algorithm, callback)

- `filename` - path of the file
- `stream` - a readable stream
- `algorithm` - any defined by `crypto.getHashes()`

Returns a `hash` as a raw `Buffer`, so if you want a hex:

```js
getHash('image.png', 'sha256', function (err, hash) {
  hash = hash.toString('hex')
})
```

## License

`MIT`

Originally authored by Jonathan Ong (@jonathanong)
