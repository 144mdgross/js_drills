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


// Solution

function spyOn(func) {
  // track how many times the function was called
  let calls = 0
  // hold the arguments
  let all = []
  // make the returned value available
  let val

  // the spy funciton
  const spy = function(...args) {
  // increment calls
    calls++
    // move arguments into outer scope
    all.push(...args)
    // call the function with the given args and save the result in outer scope
    val = func.apply(this, args)
    // return the value
    return val
  }

  // add callCount to the prototype chain. It will return # of times func was called.
  spy.callCount = () => calls
  // add to prototype. some tests whether at least one element in array passes test passed in as function
  spy.wasCalledWith = (x) => all.some((a) => x === a)
  // adds to prototype. checks to see if values match.
  spy.returned = (x) => x === val

  // returns spy function
  return spy
}
