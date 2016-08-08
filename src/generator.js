const log = require('debug')('generator');
const increment = require('./increment').promise;
const co = require('co');

module.exports = function (givenValue) {

  co(function*() {
    // first increment
    let incremented = yield increment(givenValue);

    // second increment
    incremented = yield increment(incremented);

    // third increment
    incremented = yield increment(incremented);

    log(incremented);

  }).catch(err => {
    log(err.message);
  });

};
