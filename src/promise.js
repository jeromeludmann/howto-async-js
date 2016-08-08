const log = require('debug')('promise');
const increment = require('./increment').promise;

module.exports = function (givenValue) {

  // first increment
  increment(givenValue).then(function (incremented) {
    // second increment
    return increment(incremented);

  }).then(function (incremented) {
    // third increment
    return increment(incremented);

  }).then(function (incremented) {
    log(incremented);

  }).catch(function (error) {
    log(error.message);
  });

};
