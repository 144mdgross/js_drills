// Tests. need to convert to Mocha/Chai
const expect = require('chai').expect
const likes = require('../likes.js').liked

describe('static tests', function Name() {
  it('should return correct text', function() {
    expect(likes([]).to.eq('no one likes this'));
    expect(likes(['Peter']).to.eq('Peter likes this'));
    expect(likes(['Jacob', 'Alex']).to.eq('Jacob and Alex like this'));
    expect(likes(['Max', 'John', 'Mark']).to.eq('Max, John and Mark like this'));
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max']).to.eq('Alex, Jacob and 2 others like this'));
  });
});

// describe('random tests', function() {
//   var names = [], sample;
//   while (names.length < 100) names.push(Test.randomToken());
//
//   it('should return correct text for 1 name', function() {
//     sample = Test.randomize(names).slice(0, 1);
//     expect(likes(sample.slice()), sample[0] + ' likes this');
//   });
//
//   it('should return correct text for 2 names', function() {
//     sample = Test.randomize(names).slice(0, 2);
//     expect(likes(sample.slice()), sample[0] + ' and ' + sample[1] + ' like this');
//   });
//
//   it('should return correct text for 3 names', function() {
//     sample = Test.randomize(names).slice(0, 3);
//     expect(likes(sample.slice()), sample[0] + ', ' + sample[1] + ' and ' + sample[2] + ' like this');
//   });
//
//   it('should return correct text for 4 or more names', function() {
//     // 4 names
//     sample = Test.randomize(names).slice(0, 4);
//     expect(likes(sample.slice()), sample[0] + ', ' + sample[1] + ' and 2 others like this');
//
//     // random number of names
//     sample = Test.randomize(names).slice(0, Math.max(5, Math.min(99, Test.randomNumber())));
//     expect(likes(sample.slice()), sample[0] + ', ' + sample[1] + ' and ' + (sample.length - 2) + ' others like this');
//
//     // 100 names
//     sample = Test.randomize(names);
//     expect(likes(sample.slice()), sample[0] + ', ' + sample[1] + ' and 98 others like this');
//   });
// });
