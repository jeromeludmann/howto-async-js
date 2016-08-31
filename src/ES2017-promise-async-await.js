import debug from 'debug';
import increment from './lib/increment';
import promisify from 'es6-promisify';

const log = debug('asyncjs:promise-async-await');
const incrementPromise = promisify(increment);

export default async function (givenValue) {
  try {
    let incremented = await incrementPromise(givenValue); // first increment
    incremented = await incrementPromise(incremented); // second increment
    incremented = await incrementPromise(incremented); // third increment

    log(incremented);

  } catch (err) {
    log(err.message);
  }
};