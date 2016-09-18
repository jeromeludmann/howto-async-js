var increment = require('./lib/increment-callback');

module.exports = function (givenValue, callback) {

  increment(givenValue, function (err, incremented) { // first increment
    if (err) {
      return callback(err, undefined);
    }

    increment(incremented, function (err, incremented) { // second increment
      if (err) {
        return callback(err, undefined);
      }

      increment(incremented, function (err, incremented) { // third increment
        if (err) {
          return callback(err, undefined);
        }

        return callback(null, incremented);
      });
    });
  });

};
