console.log("functions");

//functions with parameter.
function SquareOf(num){
    return num*num;
}

var result = SquareOf(2);
console.log("result : "+result);


// Let us access the arguments object
function sumAllNums() {
 console.log(arguments[0])
}
var arr= [1,2,3,4];
sumAllNums(arr)
sumAllNums(1, 2, 5, 4)
// (4) [1, 2, 3, 4]
// 1



// Let us access the arguments object

const sumAllNum = (...argu) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(argu)
}

sumAllNum(1, 2, 3, 4);
sumAllNum(1, 2, 3, 4, 5);
sumAllNum(1, 2, 3, 4, 5, 6);
// [1, 2, 3, 4]

/* what is arguments from my understanding :
if a function does not have any parameter then we can give arguments as an array: 
     arguments[0]
else we can mark or intitialize what we want to call them in function () bracket
* function Damage(...people){
* sending a array will always be considered as 1 argument and not array of arguments
}

*/

/*  Declaration funtions : */
 console.log("Declaration functions :");

/* Declaration func means declaring a function using function keyword like below. */
function printHello(){
    console.log("hello world.");
}
printHello();

/* we can declare a function with some parameters too to pass as arguments.*/
function AddTWO(n1 , n2){
    console.log(n1+n2);
}
AddTWO(1,2);

/*  
    functions with arguments and infinite params 
    args acts as array of arguments sent.
*/
function sendingRandom(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
       sum += args[i];
    }
    console.log(sum);
}
sendingRandom(11,22,33);


/* Expression function */
console.log("Expression function");

/* 
    Expression functions are often used in scenarios where you need a function for a specific task without having to name it. 
    They're especially handy for callbacks and for creating functions on the fly. However, keep in mind that with ES6 and later versions of 
    JavaScript, arrow functions (() => {}) have become a more concise and preferred way of writing expression functions in many cases.
    Example: 
*/

// Function expression
let multiply = function(a, b) {
    return a * b;
};

/*  So basically we just create a variable and assign a function expression with or without params.
    variable storing function expression and the same variable can be called like a function name as shown below
    return value will be store in assigned variable to left. */

// Using the expression function
let mutresult = multiply(5, 3); // result will be 15

console.log(mutresult);



/* Self Invoking Functions */
console.log("Self Invoking Functions");

/*  Self invoking functions are anonymous functions which do not need to be called to return a value.
    , why we need this ?
    lets say we need to assign some value in a varible based on few values dynamically,
    instead of creating variables outside in global scope and doing the computation we declare a self invoking function 
    and define the logic inside the function expression. */

let self = (function(n1,n2,n3){
    let sum = n1+n2+n3;
  return sum;
})(10,15,5);

console.log(self);


/* Arrow Functions : */
console.log("Arrow Functions");

/*  this is alternative way to assign a function expression to variable. 
    similar to Expression function.

    only difference between Expression function and arrow function is 
    Expression function have "function" keyword
    Arrow function have "=>".
    */
let sumation = (n1,n2) => {return n1 + n2;}
console.log(sumation(1,1));



/* Self invoking function + arrow function */
console.log("Self invoking function + arrow function");
let subtraction = ((b,a) => { return b-a;})(5,2);
console.log(subtraction);



let CalcAge = (BirthYear)=>{
    let now = new Date();
    return now.getFullYear() - BirthYear;
}
console.log("My Age is :" +  CalcAge(1998));



function findMax(...arg){
    //let val = arg.sort();
    let val = arg.sort((a,b)=>a-b); // we cant use above sort because , by default all numbers are assumed string
    //let val = arg.sort((a,b)=>a-b); // a-b  means assending and b-a means descending.
    return val.pop(); // pop returns last element
}
console.log( findMax(0,10,5,-1));
console.log( findMax(0,-10,-5));


let showDateTime = ()=>{
    let now = new Date();

    return `${now.getDate()}/${now.getMonth()}/ ${now.getFullYear()} ${now.getHours()} : ${now.getMinutes()}`;
    return now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear() +" "
    +now.getHours()+":"+now.getMinutes();
}
console.log(showDateTime());


let sumOfNumbers = (...args)=>{
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum +=args[i];
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4,5,5));