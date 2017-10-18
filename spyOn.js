// In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:
//
// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error
// Implement a spyOn function which takes any function as a parameter and returns a spyOn func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false
// Below is a specific example of how spyOn might work in the wild.
//
// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );
//
// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

const spyOn = function(func) {
  // will count number of times a function is called
  let calls = 0
  // will hold the arguments to apply to function
  let all = []
  // make returned value availabe within this scope
  let val

  // rest parameter syntax represents an indefinite number of args as an array
  // it becomes an array whose elements are supplied by the actual arguments passed to the funciton.
  // NOTE: reset parameters are Array instances unlike the arguments object
  // rest parameters do not have the 'callee' property like arguments does
  const spy = function(...args){
    // increment count
    calls++
    // push arguments into outer scope
    // using spread syntax here because pushing 'args' w/o it would create a 2d array.
    all.push(...args)
    // make returned value available in outer scope
    // this allows spy to execute func
    // do not use spread syntax here because args should be an array.
    val = func.apply(this, args)
    // return the value
    return val
  }


  spy.callCount = () => calls
  spy.wasCalledWith = (x) => all.some((a) => x === a)
  spy.returned = (x) => x === val

  return spy

}


module.exports.spyOn = spyOn
