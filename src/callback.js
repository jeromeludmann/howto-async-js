const log = require('debug')('callback');
const increment = require('./increment').callback;

module.exports = function (givenValue) {

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

