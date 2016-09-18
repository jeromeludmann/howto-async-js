import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import increment3times from '../src/ES2015-promise';

const expect = chai.expect;

chai.use(chaiAsPromised);

describe('Using promises only (ES2015)', function () {

  it('1 incremented three times should return 4', function () {
    return expect(increment3times(1))
      .to.eventually.equal(4);
  });

  it('-1 incremented three times should throw an error: must be positive', function () {
    return expect(increment3times(-1))
      .to.eventually.have.property('message')
      .equal('-1: must be positive');
  });

  it('11 incremented three times should throw an error: too high', function () {
    return expect(increment3times(11))
      .to.eventually.have.property('message')
      .equal('11: too high');
  });

});