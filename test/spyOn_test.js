const expect = require('Chai').expect
const spyOn = require('../spyOn.js').spyOn

// compare results based on the behaviour of this function
const testSpyOn = function (func) {
  let callVals  = [],
      returnVals = [],
      callCount = 0;
  function spy () {
    ++callCount;
    callVals = callVals.concat( [].slice.call(arguments) );
    let val = func.apply(this, arguments);
    returnVals.push(val);
    return val;
  };
  spy.callCount = function () { return callCount; };
  spy.wasCalledWith = function (val) { return callVals.indexOf(val) > -1; };
  spy.returned = function (val) { return retVals.indexOf(val) > -1; };
  return spy;
};


describe('spyOn', function(){

  function fn () {}

  it('is a function', function(){
    expect(typeof spyOn).to.eq('function')
  });

  it('takes one formal (named) parameter', function(){
    expect(spyOn.length).to.eq(1, 'spyOn should only take the function to be spied upon');
  });

  it('returns a function when supplied with a function', function(){
    expect(typeof spyOn(fn)).to.eq('function', 'spyOn should only return functions');
  });

  it('returns a different function from its input', function(){
    expect(spyOn(fn)).to.not.eq(fn, 'spyOn should not modify or return the original function');
  });

});

describe('A `spy` returned by `spyOn(originalFn):`', function(){

  let originalFn, spy, valToReturn;
  before(function(){
    valToReturn = {};
    originalFn = testSpyOn(function orig (){ return valToReturn; });
    // 1st call
    spy = spyOn(originalFn);
  });

  it('has no formal (named) parameters', function(){
    expect(spy.length).to.eq(0, 'spy should take an arbitrary number of arguments');
  });

  it('calls `originalFn` when called', function(){
    spy();
    expect(!!originalFn.callCount()).to.eq(true, 'original was not called');
  });

  it('returns what `originalFn` would return', function(){
    //2nd call
    expect(spy()).to.eq(valToReturn, 'spy did not return the original function\'s return value');
  });

  it('returns how many times it was called via `.callCount()`', function(){
    //3rd call
      spy();
      expect(spy.callCount()).to.eq(3);

  });

  it('`spy.retured(val)` returns `false` if `spy` never returned `val`', function(){
    expect(spy.returned(1)).to.eq(false, 'no false positives');
  });

  it('`spy.retured(val)` returns `true` if `spy` ever returned `val`', function(){
    spy();
    expect(spy.returned(valToReturn)).to.eq(true);
    var oldVal = valToReturn;
    var val2 = {};
    valToReturn = val2;
    spy();
    expect(spy.returned(valToReturn)).to.eq(true, 'spy must not forget old return values');

    expect(spy.returned(val2)).to.eq(true, 'spy should remember new values too');
  });

  it('`spy.wasCalledWith(val)` returns `false` if `spy` was never called with `val`', function(){
    expect(spy.wasCalledWith(1)).to.eq(false, 'no false positives');
  });

  it('`spy.wasCalledWith(val)` returns `true` if `spy` was ever called with `val`', function(){
    spy(1);
    expect(spy.wasCalledWith(1)).to.eq(true, 'called once with one param');
    spy(2);
    expect(spy.wasCalledWith(1)).to.eq(true, 'do not overwrite, remember all values');
    expect(spy.wasCalledWith(2)).to.eq(true, 'remember new values too');
    var obj1 = {}, obj2 = {}, obj3 = {};
    spy(null, obj1, obj2, obj3);
    expect(spy.wasCalledWith(obj1)).to.eq(true, 'spy can be called with multiple args');
    expect(spy.wasCalledWith(obj2)).to.eq(true, 'spy can be called with multiple args');
    expect(spy.wasCalledWith(obj3)).to.eq(true, 'spy can be called with multiple args');
  });

  it('do not cheat with globals; every spy must track itself!', function(){
    var valToReturn2 = {};
    var originalFn2 = testSpyOn(function(){ return valToReturn2 });
    var spy2 = spyOn(originalFn2);
    console.log('separate call counts');
    spy(valToReturn);
    // expect(spy.callCount()).to.eq(1);
    expect(spy2.callCount()).to.eq(0);
    console.log('separate `returned` values');
    spy2(valToReturn2);
    console.log(spy2 === spy)
    expect(spy.returned(valToReturn)).to.equal(true);
    expect(spy.returned(valToReturn2)).to.equal(false);
    expect(spy2.returned(valToReturn2)).to.equal(true);
    expect(spy2.returned(valToReturn)).to.equal(false);
    console.log('separate `wasCalledWith` values');
    expect(spy.wasCalledWith(valToReturn)).to.equal(true);
    expect(spy.wasCalledWith(valToReturn2)).to.equal(false);
    expect(spy2.wasCalledWith(valToReturn2)).to.equal(true);
    expect(spy2.wasCalledWith(valToReturn)).to.equal(false);
  });

});
