var log = require('debug')('asyncjs:callback');
var increment = require('./lib/increment');

module.exports = function (givenValue) {
  increment(givenValue, function (error, incremented) { // first increment
    if (error) {
      log(error.message);
      return;
    }

    increment(incremented, function (error, incremented) { // second increment
      if (error) {
        log(error.message);
        return;
      }

      increment(incremented, function (error, incremented) { // third increment
        if (error) {
          log(error.message);
          return;
        }

        log(incremented);
      });
    });
  });
};
