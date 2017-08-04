// one solution
function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }

// second solution

function number2words(n) {
  var words = []
  var english = {
    0: 'zero',    10: 'ten',
    1: 'one',     11: 'eleven',
    2: 'two',     12: 'twelve',     20: 'twenty',
    3: 'three',   13: 'thirteen',   30: 'thirty',
    4: 'four',    14: 'fourteen',   40: 'forty',
    5: 'five',    15: 'fifteen',    50: 'fifty',
    6: 'six',     16: 'sixteen',    60: 'sixty',
    7: 'seven',   17: 'seventeen',  70: 'seventy',
    8: 'eight',   18: 'eighteen',   80: 'eighty',
    9: 'nine',    19: 'nineteen',   90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  }

  if (n < 100 && english[n]) return english[n]

  var p1 = n / 1000 | 0
  var p2 = n % 1000

  if (p1) words.push(hundreds(p1), 'thousand')
  if (p2) words.push(hundreds(p2))

  return words.join(' ')

  function hundreds(n) {
    var words = []
    if (n >= 100) words.push(english[n / 100 | 0], 'hundred')

    var tens = n % 100
    if (tens) {
      if (english[tens]) {
        words.push(english[tens])
      } else {
        words.push(english[(0 | tens / 10) * 10] + '-' + english[tens % 10])
      }
    }

    return words.join(' ')
  }
}

// third solution

var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n){
  if (n < 20) return num[n];
  var digit = n%10;
  if (n < 100) return tens[Math.floor(n/10)-2] + (digit ? "-"+num[digit] : "");
  if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 == 0 ? "" : " " + number2words(n%100));
  return number2words(Math.floor(n/1000)) + " thousand" + (n%1000 != 0 ? " " +number2words(n%1000) : "");
}

//fourth solution

function number2words(n) {
  if (n < 20) return ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][n];
  if (n < 100) return ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"][~~(n / 10) - 1] + (n % 10 === 0 ? "" : "-" + number2words(n % 10));
  if (n < 1e3) return ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][~~(n / 100) - 1] + " hundred" + (n % 100 === 0 ? "" : " " + number2words(n % 100));
  return number2words(~~(n / 1e3)) + " thousand" + (n % 1e3 === 0 ? "" : " " + number2words(n % 1e3));
}
