import debug from 'debug';
import increment from './lib/increment';
import promisify from 'es6-promisify';

const log = debug('asyncjs:promise');
const incrementPromise = promisify(increment);

export default function (givenValue) {
  incrementPromise(givenValue).then(function (incremented) { // first increment
    return incrementPromise(incremented); // second increment

  }).then(function (incremented) {
    return incrementPromise(incremented); // third increment

  }).then(function (incremented) {
    log(incremented);

  }).catch(function (error) {
    log(error.message);
  });
};
