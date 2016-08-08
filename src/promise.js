var log = require('debug')('promise');

var increment = function (value) {
  return new Promise(function (resolve, reject) {
    if (value < 0) {
      reject(new Error('must be positive'));
    }

    resolve(value + 1);
  });
};

module.exports = function (givenValue) {
  increment(givenValue).then(function (value) {
    log('value: ' + value);

  }).catch(function (error) {
    log(error.message);
  });
};
