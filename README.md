LINK ONE: JAVASCRIPT ARRAY METHODS
•	Array Length: it returns the length of an array
•	Array toString (): It converts an array to a string representation each element is converted to a string 
•	The join () joins the elements of an array into a string using a specified separator.
•	Popping and pushing: When working with arrays, it is easy to remove elements from or add new elements to an array. This is done through the operations of "pop" and "push" items in and out of an array.
•	The pop() method returns the value that was “removed”.
•	The push() method “add new” value into the array.
•	The shift and unshift works like pop and push. The shift removes the first elements from an array, unshift adds a new one to the beginning of an array, and returns a new length.
•	Array elements can be accessed with an index number, an array is a zero index element so, all values start counting from 0 as the first element. 
•	The length provides an easy way to add a new element to the end of the array.
•	The delete() can be used to delete an element from the array which leaves an empty or undefined in the array it is advisable to use the pop() or shift() if you need to remove anything from the array. 
•	The concatenating/ merging creates a new array by concatenating the existing array [concatenating in simple English is linking things together in a series]. In javascript you can link sentences or anything using the “+” operator, using the concat() method. For example, you need to merge the names of girls and boys in JS it goes like this (myGirls.concat(myBoys)
•	splice(): Adds or removes elements from an array at a specified index. Splice can be used to remove elements without affecting the array 
•	slice() it takes a portion of the array into a new array.

LINK 2: JAVASCRIPT FUNCTIONS
Function in English is an activity that is natural to or the purpose of a person or a thing. 
Javascript functions are blocks of reusable code that perform some task. They allow you to organize and reuse code efficiently. There are two ways to define functions i.e function declaration and function expression
•	Javascript function is defined with the “function” keyword, followed by the () known as the parentheses.
•	Function names can contain letters (abc), numbers (123), underscore (_), and the dollar sign($).
•	The parentheses is used to accommodate the parameter name eg (num1, num2).
•	Code to be run by the function is placed inside the curly braces I.e  function number (num1) {
        Console.log……………..
}
•	Functions are invoked by calling their name followed by parentheses and optional arguments.
•	Arguments are passed to the function and can be accessed within its body using parameter names. For example, function greet (name, age)
•	Function return when a return statement is seen in a function, the function will stop executing and return a specific value.
•	With function code can be reused, it can be used with the same code with different arguments to produce different results 
•	The () operator calls the function, accessing a function without this operator returns the function and not the actual result 
•	A function can be treated and used the same way as a variable. It can be used in all types of scenarios, including formulas, assignments, and calculations
•	Variables and functions declared within a function are local scope and cannot be accessed outside the function. For example function calculated(a, b) {
  var result = a + b;
console.log( a + b);
 }
calculated(3, 4);
•	When we call the calculated function with the argument 3 and 4 it calculate 3 and 4 and logs the result within the result to the console within the function. However, if we try to access the result variable outside the calculated function it will throw an error.
LINK 3: FUNCTIONS 
1.	Function Definition:
•	A block code that encapsulates a specific task and is used throughout the program. 
•	The function keyword is followed by the name and the parameter list
•	The function body contains statements that execute when the function is called.
•	Types of function definitions
i.	A function declaration is hoisted at the top of their scope. 
ii.	A function expression is defined within an expression and evaluated 
2.	Function types 
i.	Regular function: Can return any data type and always runs to completion.
ii.	Generator function: Returns a generator object, allowing for pause and resume functionality with yield.
iii.	Async function: Returns a promise object, allowing for asynchronous operations with await.
iv.	Async generator function: Combines features of async and generator functions, enabling asynchronous iteration with yield.
3.	Function Invocation 
•	Calling a function involves its name followed by parentheses and optional arguments.
•	Arguments are evaluated before being passed to the function.
•	Function execution ends when reaching the return statement or the end of the function body.
4.	Function Scope 
•	variables declared within a function have local scope and are inaccessible outside the function.
•	Global variables declared outside any function are accessible from anywhere in the code.
•	Lexical scoping: functions can access variables declared in their enclosing scope (closure).
Link 4: Control flow statement
Key points: 
1.	If/Else Statements: These statements are used to execute a code block if a certain condition is true and a different block of code if the condition is false. For Example, const name = Wunmi;
If ( name = Wunmi) {
Console.log( “true”)
} else {
Console.log (“false”)
}

2.	Switch Statements:  (Switch in simple English is changing the position or direction or focus of a thing.) (Statement is a clear expression of something in a speech or writing)
 Switch statements are used to execute a block code based on the value of a variable expression.  How it works:
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  case "orange":
    console.log("It's an orange.");
    break;
  default:
    console.log("It's an unknown fruit.");
    break;
} 
A variable called fruit with the value “apple”. The switch statement evaluates the value of the fruit and runs the code block that matches. Since fruit is an “apple” block will run which logs “It’s an apple” to the console. The break statement is used to exit the switch statement. If the fruit had a different value then the code inside the corresponding case block would run instead. If none turns out the case matches the value of the fruit, the code inside the default block will run “It's an unknown fruit” in the console.  
Key takes meaning in the example: 
Break: To separate into pieces
Default: to fulfill an obligation
Case: An instance of a situation of something occurring.
3.	Loops: Loops are used to repeatedly run a block code based on certain conditions. 
•	For loops iterates a specific number of times. An example is how to use a for loop to print numbers from 1-5.  For (let I = 1; I <= 5; i++){
Console.log (i);
} 
•	While Loops continue to run a block code as long as a condition remains true. An example shows how to use a while loop to print numbers from 1 to 5.
•	Do-while loop which runs a specified statement as long as the test condition evaluates to true. 
Link 5: Functions  
1.	Important function feature 
•	Parameters and arguments: placeholders and actual values passed to a function.
•	Default values: assigning values to parameters if not explicitly provided.
•	Return statements: specifying the value returned by the function.
•	Scope: controlling the accessibility of variables within the function and outside.
•	Local variables: declared within a function and accessible only within that function.
•	Global variables: declared outside a function and accessible from anywhere in the code.
•	Closure: functions retain access to variables from their outer scope even after the function has ended.

