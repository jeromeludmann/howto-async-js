var log = require('debug')('async');
var increment = require('./increment').promise;

module.exports = async function (givenValue) {
  // ES7

  try {
    // first increment
    let incremented = await increment(givenValue);

    // second increment
    incremented = await increment(incremented);

    // third increment
    incremented = await increment(incremented);

    log(incremented);

  } catch (err) {
    log(err.message);
  }
};
