import chai from 'chai';
import increment3times from '../src/ES5-callback';

const expect = chai.expect;

describe('Using callbacks', function () {

  it('1 incremented three times should return 4', function (done) {
    increment3times(1, function (error, incremented) {
      expect(incremented).to.equal(4);
      done();
    });
  });

  it('-1 incremented three times should throw an error: must be positive', function (done) {
    increment3times(-1, function (error, incremented) {
      expect(error.message).to.be.equal('-1: must be positive');
      done();
    });
  });

  it('11 incremented three times should throw an error: too high', function (done) {
    increment3times(11, function (error, incremented) {
      expect(error.message).to.be.equal('11: too high');
      done();
    });
  });

});