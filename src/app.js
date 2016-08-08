const callback = require('./callback');
const promise = require('./promise');
const generator = require('./generator');

callback(-1);
callback(11);
callback(1);

promise(-1);
promise(11);
promise(1);

generator(-1);
generator(11);
generator(1);
