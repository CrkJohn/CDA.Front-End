/*


If you find yourself repeating else if statements in your code, where each condition is based on the same value, then it might be time to 
use a switch statement.

*/
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}

/*
Switch statement
A switch statement is an another way to chain multiple else if statements that are based on the same value without using
 conditional statements. Instead, you just switch which piece of code is executed based on a value.
*/
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}
/*
Here, each else if statement (option === [value]) has been replaced with a case clause (case: [value]) and those clauses have been 
wrapped inside the switch statement.

When the switch statement first evaluates, it looks for the first case clause whose expression evaluates to the same value as the 
result of the expression passed to the switch statement. Then, it transfers control to that case clause, executing the associated statements.

So, if you set option equal to 3...
*/
var option = 3;

switch (option) {
  ...
}
Prints:
You selected option 3.
You selected option 4.
You selected option 5.
You selected option 6.

/*
...then the switch statement prints out options 3, 4, 5, and 6.

But that’s not exactly like the original if...else code at the top? So what’s missing?

Break statement
The break statement can be used to terminate a switch statement and transfer control to 
the code following the terminated statement. By adding a break to each case clause,
you fix the issue of the switch statement falling-through to other case clauses.

*/
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
//Prints: You selected option 3.


/*

In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

For example, when your code follows a hierarchical-type structure.
*/
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

/*
Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding 
Kittens card game.

In this example, based on the successful Exploding Kittens Kickstarter campaign (a hilarious card game created by Elan Lee), 
each successive tier builds on the next by adding more to the output. Without any break statements in the code, after the switch 
statement jumps to the "nsfw deck", it continues to fall-through until reaching the end of the switch statement.

Also, notice the default case.
*/
var tier = "none";
var output = "You’ll receive ";

switch (tier) {
  ... 
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

/*
Prints: You’ll receive one copy of the Exploding Kittens card game.

You can add a default case to a switch statement and it will be executed 
when none of the values match the value of the switch expression.
*/

