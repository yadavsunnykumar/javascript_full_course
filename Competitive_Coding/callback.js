// Explain what a callback function is and provide a simple example
// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
// Below is an example of a simple callback function that logs to console after some operations have been complted.

const modifyArray = (arr, callback) => {
  arr.push(100)
  callback(arr)
}
var arr = [1, 2, 3, 4, 5]
modifyArray(arr, (arr) => console.log('array has modified', arr))
