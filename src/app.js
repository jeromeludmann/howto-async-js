var givenValue = Number(process.argv[2]);

require('./callback')(givenValue);
require('./promise')(givenValue);