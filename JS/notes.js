/*
	Alternatively, you can use the String’s charAt() method to access individual characters. For example, 
	quote.charAt(6) would also return "w". You’ll learn more about methodslater in this course.

	NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations. For instance, 
	if you wrote some code that performed a math calculation, and the calculation failed to produce a valid number, 
	NaN might be returned
		
	null refers to the "value of nothing", while undefined refers to the "absence of value".
 
 Parameters vs. Arguments
 
At first, it can be a bit tricky to know when something is either a parameter
 or an argument. The key difference is in where they show up in the code.
 A parameter is always going to be a variable name and appears in the function
 declaration. On the other hand, an argument is always going to be a value
 (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.)
 and will always appear in the code when the function is called or invoked.

In computer programming, variable shadowing occurs when a variable declared
within a certain scope (decision block, method, or inner class) has the same
name as a variable declared in an outer scope. This outer variable is said
to be shadowed..


What you've learned so far:
If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function it was declared in
(even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in the current function.
If it doesn't find anything, it will continue to the next outer function to see if it can find the
identifier there. It will keep doing this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names,
and messy code.



All function declarations are hoisted and loaded before the script is actually run. Function expressions
are not hoisted, since they involve variable assignment, and only variable declarations are hoisted. The
function expression will not be loaded until the interpreter reaches it in the script.

Being able to store a function in a variable makes it really simple to pass the function into another function. 
A function that is passed into another function is called a callback.


shift() will remove the first element from an array.
splice() can be used if you specify the index of the first element, and indicate that you want to delete 1 element.
Keep in mind that the slice() method allows you to create a copy of the array between two indices. Though you could just exclude the index of the first element, this approach does not directly modify a given array.

*/


var quote = "Stay awhile and listen!";
console.log(quote[6]);
console.log(quote.charAt(6));
