var log = require('debug')('generator');
var co = require('co');

var increment = function (value) {
  return new Promise(function (resolve, reject) {
    if (value < 0) {
      reject(new Error('must be positive'));
    }

    resolve(value + 1);
  });
};

module.exports = function (givenValue) {
  co(function*() {
    let value = yield increment(givenValue);
    log('value: ' + value);

  }).catch(err => {
    console.log(err.message);
  });

};
