import 'mocha';
import { expect, use } from 'chai';
// Sinon is a library that provides spies, stubs and mocks, and works with any testing framework. 
// It can be combined with chai - sinon to write idiomatic Chai assertions
import { spy, stub } from 'sinon';
import * as sinonChai from 'sinon-chai';

const _ = 'Fill me in with the correct value';
use(sinonChai);
describe('Mocha', () => {
  // Our test runner/framework - It's job is to traverse the describes and its and run the tests,
  // then report the results. Much more here: https://mochajs.org/
  it('is a test runner', () => {
    expect('A value').to.equal(_);
    expect(1 + 1 === 2).to.equal(_);
  });
  describe('describe and it blocks', () => {
    it('are just functions, executed by Mocha', () => {
      expect(describe).to.be.a('function');
      expect(it).to.be.a(_);
    });
  });
});

describe('Chai', () => {
  it('is an assertion library', () => {
    // that is, you use to construct assertions that throw errors of if they don't evaluate to true.
    expect([1, 2, 3]).to.include(2);
    expect(true).to.be.true;
    expect(false).not.to.be.true;
    let foo;
    expect(foo).to.be.undefined;
    foo = { bar: '' };
    expect(foo).to.have.property(_);
    // See many, many more here: http://chaijs.com/api/bdd/
  });
});

describe('Sinon', () => {
  it('is a library for creating spies, mocks, and stubs', () => {

    // Let's make a spy...
    const mySinonSpy = spy();
    // A spy is a function
    expect(mySinonSpy).to.be.a('function');
    // That keeps track of how it's called
    mySinonSpy();
    /* Note: we're using the extensions to Chai provided by 
    the package sinon-chai for a more fluent syntax. */
    expect(mySinonSpy).to.have.been.called;

    mySinonSpy('foo');
    expect(mySinonSpy).to.have.been.calledTwice;
    expect(mySinonSpy).to.have.been.calledWith(_);
  });

  it('is awesome for testing stuff in isolation', () => {
    function myAwesomeHigherOrderFunction(value: string, callback: () => string) {
      // Do magic
      // then...
      return value + callback();
    }

    const callbackResult = 'KAZAM';
    const cb = stub().returns(callbackResult);
    const msg = 'BAM';
    expect(myAwesomeHigherOrderFunction(msg, cb)).to.equal(_);
  });

  // There is way more stuff to learn about sinon.
  // It can test async functions, act as a faked XHR server, and lots more. 
  // Check it out at http://sinonjs.org/
});
