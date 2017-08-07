function number2words(n){
  console.log(arguments)


function hundo (digits) {
   let tens = +digits[0] * 10
   return `${hashItOut[tens]}-${hashItOut[num[1]]}`
}

function thousands (numero) {

}
  // works for numbers between 0 and 999,999
  // strategy
  // keep an array or hash table of words.
  // if it's a hash table I could match the digit as a key to the word value.
  // i would need 1 - 9 plus every 10. that's a big hash table.
  // api call?
  // what else is there?
  // how to pluralize/ transform the numbers? Maybe it's not as annoying as I think?
  // no to type it all out would suck. not doing that.
  // hmmm. regex?
  // words I'd need. 1 - 19, 20, 30, etc. hundred, thousand. is that it?
  let hashItOut = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  // first get simple results
  let num = n.toString()
  if (num.length < 2) {
    return hashItOut[n]
  } else if (num.length === 2) {
      if(hashItOut[n]) {
        return hashItOut[n]
      } else {
       return hundo(num)
      }
  } else if (num.length === 3) {

  }
}

module.exports = {
  number2words: number2words
}

// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.
//
// For example,

// number2words(0) should return "zero"

// number2words(1) should return "one"

// number2words(9) should return "nine"

// number2words(10) should return "ten"

// number2words(17) should return "seventeen"

// number2words(20) should return "twenty"

// number2words(21) should return "twenty-one"

// number2words(45) should return "forty-five"

// number2words(80) should return "eighty"

// number2words(99) should return "ninety-nine"

// number2words(100) should return "one hundred"

// number2words(301) should return "three hundred one"

// number2words(799) should return "seven hundred ninety-nine"

// number2words(800) should return "eight hundred"

// number2words(950) should return "nine hundred fifty"

// number2words(1000) should return "one thousand"

// number2words(1002) should return "one thousand two"

// number2words(3051) should return "three thousand fifty-one"

// number2words(7200) should return "seven thousand two hundred"

// number2words(7219) should return "seven thousand two hundred nineteen"

// number2words(8330) should return "eight thousand three hundred thirty"

// number2words(99999) should return "ninety-nine thousand nine hundred ninety-nine"

// number2words(888888) should return "eight hundred eighty-eight thousand eight hundred eighty-eight"
