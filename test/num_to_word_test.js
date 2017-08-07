// goal convert tests to mocha/chai
const expect = require('chai').expect
const number2words = require('../num_to_words')

describe('Num Tests', function functionName(){
  it('should print a string that matches given word'), function () {
    expect(number2words(0)).to.equal("zero");
    expect(number2words(1)).to.equal("one");
    expect(number2words(8)).to.equal("eight");
    expect(number2words(10)).to.equal("ten");
    expect(number2words(19)).to.equal("nineteen");
    expect(number2words(20)).to.equal("twenty");
    expect(number2words(22)).to.equal("twenty-two");
    expect(number2words(54)).to.equal("fifty-four");
    expect(number2words(80)).to.equal("eighty");
    expect(number2words(98)).to.equal("ninety-eight");
    expect(number2words(100)).to.equal("one hundred");
    expect(number2words(301)).to.equal("three hundred one");
    expect(number2words(793)).to.equal("seven hundred ninety-three");
    expect(number2words(800)).to.equal("eight hundred");
    expect(number2words(650)).to.equal("six hundred fifty");
    expect(number2words(1000)).to.equal("one thousand");
    expect(number2words(1003)).to.equal("one thousand three");

  }

})
