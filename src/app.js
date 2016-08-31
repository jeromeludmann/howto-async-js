require('source-map-support/register');

var usingCallbacks = require('./es5');
var usingPromises = require('./es6');
var usingAsyncAwait = require('./es7');

// Three asynchronous calls...

usingCallbacks(-1);
usingCallbacks(11);
usingCallbacks(1);

usingPromises(-1);
usingPromises(11);
usingPromises(1);

usingAsyncAwait(-1);
usingAsyncAwait(11);
usingAsyncAwait(1);