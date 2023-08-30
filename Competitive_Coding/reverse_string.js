// Given String, reverse each word in the sentence
var string = 'Welcome to the javascript Guide'
var reverseEntireSentence = reverseBySeparator(string, '')
var reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ')

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator)
}
console.log(reverseEachWord)
console.log(reverseEntireSentence)
var x = 'Sunny'
var y = x.split('').reverse().join('')

console.log(y)
