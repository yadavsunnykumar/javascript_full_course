// This is the JavaScript ES6 version and changes in it

// JavaScript 'let' keyword allows you to declare a variable with block scope
var x = 10
{
  let x = 3
  console.log(x) // Here x = 3
}
console.log(x) // Here X = 10

// JavaScript 'const' keyword allows you to declare a constant. Constants
// are similar to the 'let' variables, except that the value cannot be changed.

var x = 15
//Here x is 15
{
  const x = 2
  console.log(x)
  //Here x is 2
}
console.log(x)
//Here x is 15

// Arrow Functions allows a short syntax for writing function expressions.
// You won't need the function keyword, the return keyword,and the curly brackets

//ES5
var x = function (a, b) {
  return a + b
}

//ES6
const z = (a, b) => a + b

console.log(z(2, 3))
console.log(x(2, 2))
//Arrow function donot have their own 'this'.They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.
//using 'const' is safer than using 'var',because a function expression is always a constant value.
// You can only omit the 'return' keyword and the curly bracekts if the function is a single satement.
// Because of this,it might be a good habit to always keep them:
const arrowFunction = (x) => {
  let b = 20
  return b + x
}
console.log(arrowFunction(2))
