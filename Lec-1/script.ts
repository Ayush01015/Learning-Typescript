/** Basic Types
 * Number, String, Boolean
 * Arrays, Tuples
 * Any, Unknown, Never, Void
 */

// let a; avoid giving type any to variables in ts.
let a1 : number;
a1 = 12;
a1 = +"12"; //still a number js folks knows this 

console.log(a1);


let arr1 : [];
let fname : string;

// ? Tuples
let array1 : [number,string] = [1,"Ayush"]; // static and fixed size
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

let variable : unknown = 12;
variable  = "Some String";
variable  = true;

// Never - we use it when we want to specify that it never ends like infinite loops

function infineRun() : never{
    while(true){
        console.log("infinite");
        
    }
}

// fact about never - code after never don't get executed

// VOID - returns nothing

function hello() : void{
    console.log("hello");
    
}

hello();

// Enums

enum Directions{
    top = "TOP",
    right = "RIGHT",
    bottom = "BOTTOM",
    left = "LEFT"
}

console.log(Directions.top);
