
var fs = require('fs')
var createHash = require('crypto').createHash

module.exports = function (stream, method, done) {
  if (typeof stream === 'string')
    stream = fs.createReadStream(stream)

  var hasher = createHash(method)
  .once('error', finish)
  .once('readable', onReadable)

  stream
  .once('error', finish)
  .pipe(hasher)

  function onReadable() {
    finish(null, this.read())
  }

  function finish(err, hash) {
    stream.removeListener('error', finish)
    hasher.removeListener('error', finish)
    hasher.removeListener('readable', onReadable)
    if (err) done(err)
    else done(null, hash)
    stream = hasher = null
  }
}
