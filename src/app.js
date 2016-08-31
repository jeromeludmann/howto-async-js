import usingCallbacks from './ES5-callback';
import usingPromises from './ES2015-promise';
import usingPromisesAndCo from './ES2015-promise-generator';
import usingAsyncAwait from './ES2017-promise-async-await';

// Three asynchronous calls...

usingCallbacks(-1);
usingCallbacks(11);
usingCallbacks(1);

usingPromises(-1);
usingPromises(11);
usingPromises(1);

usingPromisesAndCo(-1);
usingPromisesAndCo(11);
usingPromisesAndCo(1);

usingAsyncAwait(-1);
usingAsyncAwait(11);
usingAsyncAwait(1);