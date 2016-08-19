var log = require('debug')('promise');
var increment = require('./increment').promise;

module.exports = function (givenValue) {
  // ES6

  // first increment
  increment(givenValue)

      .then(function (incremented) {
        // second increment
        return increment(incremented);
      })

      .then(function (incremented) {
        // third increment
        return increment(incremented);
      })

      .then(function (incremented) {
        log(incremented);
      })

      .catch(function (error) {
        log(error.message);
      });
};
