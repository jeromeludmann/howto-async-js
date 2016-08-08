var log = require('debug')('callback');

module.exports = function (givenValue) {
  var increment = function (value, callback) {
    setTimeout(function () {
      if (value < 0) {
        return callback(new Error('must be positive'), null);
      }

      return callback(null, value + 1);
    }, 0);
  };

  increment(givenValue, function (error, value) {
    if (error) {
      log(error.message);
      return;
    }

    log('value: ' + value);
  });

  increment(givenValue * -1, function (error, value) {
    if (error) {
      log(error.message);
      return;
    }

    log('value: ' + value);
  });
};

