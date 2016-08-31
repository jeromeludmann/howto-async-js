import debug from 'debug';
import co from 'co';
import increment from './lib/increment';
import promisify from 'es6-promisify';

const log = debug('asyncjs:promise-generator');
const incrementPromise = promisify(increment);

export default function (givenValue) {
  co(function * () {
    let incremented = yield incrementPromise(givenValue); // first increment
    incremented = yield incrementPromise(incremented); // second increment
    incremented = yield incrementPromise(incremented); // third increment

    log(incremented);

  }).catch(function (err) {
    log(err.message);
  });
};
