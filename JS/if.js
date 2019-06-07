/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 * === Strict 

*/

// change the value of `number` to test your if...else statement
var number = 12;

if (number%2===0) {
    console.log("even")
} else {
    console.log("odd")
}


/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

if(musicians <= 0){
    console.log("not a group")
}else if(musicians == 1){
    console.log("solo")
}else if(musicians == 2){
    console.log("duet")
}else if(musicians == 3){
    console.log("trio")
}else if(musicians == 4){
    console.log("quartet")
}else if(musicians > 4){
    console.log("this is a large group")
}






/*

Prints "" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4

*/


/*
 * Programming Quiz: Murder Mystery (3-4)
 
 four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.

 
 */

// change the value of `room` and `suspect` to test your code
var room = "billiards room";
var suspect = "Mrs. Sparr";

var weapon = "";
var solved = false;

if (room=="ballroom" && suspect=="Mr. Kalehoff") {
    solved = true
    weapon = "poison"
} else if (room =="gallery" && suspect =="Ms. Van Cleve") {
    weapon = "trophy"
    solved = true
} else if (room == "billiards room" && suspect =="Mrs. Sparr") {
    weapon = "pool stick"
    solved = true
} else if(room == "dining room" && suspect == "Mr. Parkes") {
    weapon = "knife"
    solved = true
}

if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
}

