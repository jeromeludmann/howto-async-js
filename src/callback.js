var log = require('debug')('callback');

var increment = function (value, callback) {
  setTimeout(function () {
    if (value < 0) {
      return callback(new Error('must be positive'), null);
    }

    return callback(null, value + 1);
  }, 0);
};

module.exports = function (givenValue) {
  increment(givenValue, function (error, value) {
    if (error) {
      log(error.message);
      return;
    }

    log('value: ' + value);
  });
};

