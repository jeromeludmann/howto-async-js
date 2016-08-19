var log = require('debug')('callback');
var increment = require('./increment').callback;

module.exports = function (givenValue) {
  // ES5

  // first increment
  increment(givenValue, function (error, incremented) {
    if (error) {
      log(error.message);
      return;
    }

    // second increment
    increment(incremented, function (error, incremented) {
      if (error) {
        log(error.message);
        return;
      }

      // third increment
      increment(incremented, function (error, incremented) {
        if (error) {
          log(error.message);
          return;
        }

        log(incremented);
      });
    });
  });
};
