// TODO: Convert to Mocha/chai
//
// Test.expect(solution('camelCasing') == 'camel Casing', 'Unexpected result')
//
// Test.expect(solution('camelCasingTest') == 'camel Casing Test', 'Unexpected result')


// My first Solution
// complete the function
// function solution(string) {
//   let arr = string.split('')
//   let result = []
//
//     for(let i = 0; i < arr.length; i++) {
//       if (arr[i].charCodeAt(arr[i]) < 91) {
//         let addSpace = " " + arr[i];
//         result.push(addSpace)
//         }
//         else {
//           result.push(arr[i])
//         }
//       }
//    return result.join("")
// }
