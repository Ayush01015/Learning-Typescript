/** Basic Types
 * Number, String, Boolean
 * Arrays, Tuples
 * Any, Unknown, Never, Void
 */
// let a; avoid giving type any to variables in ts.
var a1;
a1 = 12;
a1 = +"12"; //still a number js folks knows this 
console.log(a1);
var arr1;
var fname;
// ? Tuples
var array1 = [1, "Ayush"]; // static and fixed size
// let array1 : [number,string] = [1,"Ayush",""]; //error
console.log(array1);
/*
    small issue with tuples
    we can still push elements in the array1
*/
array1.push("Ayush Shrivastav");
// it got pushed it tuple
console.log(array1);
// any default
// unknown - when we are not sure about type
var variable = 12;
variable = "Some String";
variable = true;
// Never - we use it when we want to specify that it never ends like infinite loops
function infineRun() {
    while (true) {
        console.log("infinite");
    }
}
// fact about never - code after never don't get executed
// VOID - returns nothing
function hello() {
    console.log("hello");
}
hello();
// Enums
var Directions;
(function (Directions) {
    Directions["top"] = "TOP";
    Directions["right"] = "RIGHT";
    Directions["bottom"] = "BOTTOM";
    Directions["left"] = "LEFT";
})(Directions || (Directions = {}));
console.log(Directions.top);
