function number2words(n) {

  function hundo(digits) {
    let words = []

    if(n >= 100) {
      words.push(hashItOut[n / 100 | 0], 'hundred')
    }

    let tens = digits % 100
    if(tens) {
      if(hashItOut[tens]) {
        words.push(hashItOut[tens])
      } else {
        words.push(hashItOut[(0 | tens / 10) * 10] + '-' + hashItOut[tens % 10])
      }

    }
    return words.join('')
  }

  let result = []

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
    100: 'hundred',
    1000: 'thousand'
  }

  if (n < 100 && hashItOut[n]) {
    return english[n]
  }

// determine how many places the number is
let placeOne = n / 1000 | 0
let placeTwo = n % 1000

if(placeOne) {
  words.push(hundo(placeOne), 'thousand')
}

if(placeTwo) {
  words.push(hundo(placeTwo))
}

return words.join('')

}

module.exports = {
  number2words: number2words
}
