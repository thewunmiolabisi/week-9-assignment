// Question 2: Build a simple loop, inside a function, that takes an array and prints the value of the array to the console. 
 
let value = ['food', 'cosmetics', 'clothes', 10000, 'fruits'];

function print(array) {
 
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
print(value);