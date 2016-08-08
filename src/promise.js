var log = require('debug')('promise');

module.exports = function (givenValue) {
  var increment = function (value) {
    return new Promise(function (resolve, reject) {
      if (value < 0) {
        reject(new Error('must be positive'));
      }

      resolve(value + 1);
    });
  };

  increment(givenValue)
      .then(function (value) {
        log('value: ' + value);
      })
      .catch(function (error) {
        throw error;
      });

  increment(givenValue * -1)
      .then(function (value) {
        log('value: ' + value);
      })
      .catch(function (error) {
        log(error.message);
      });
};
