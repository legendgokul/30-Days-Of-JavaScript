
console.log("Countries",countries);

let test = true;
console.log(Array.isArray(countries));


const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> it copies all item , meaning its wont slice anything.
console.log(numbers.slice(4)) // -> if one parameter is it is considered as start point and enpoint is fixed to length by default.
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

//Splice
console.log("Splice");
// Splice can take 3 different parameter 
// 1.starting index (0 -> n-1)
// 2.no of items to be removed
// 3.array of item to be added  // this will be added in place of what element is being removed.
// Splice will return items which are removed.
// and the original array will contain remaining data.
const number = [1,2,3,4,5,6,7];

var data  = number.splice(0,4);  // data 1,2,3,4
console.log("data"+data);    
console.log("number"+number);    // number 5,6,7

var spliceResult = number.splice(1,1,8,9,10);
console.log(spliceResult);  // 6
console.log(number); // 5,8,9,10,7

console.log("learning shift and unshift");
var Shiftnum = [1,2,3,4,5,6,7];
Shiftnum.shift();
console.log(Shiftnum); // removes one number from the start of list , it also returns the items which is getting removed during shift operation.

Shiftnum.unshift(1)
console.log(Shiftnum); // Added the input item at the start and returns the new length as output.
Shiftnum.unshift(2,3) 
console.log(Shiftnum); // we can add an array of new items also at the start.
Shiftnum.unshift()
console.log(Shiftnum); // if we dont provide any value for unshift , there wont be any change made to the list and length of array will be returned.



var BooleanList = [true,false,false,true,true];
BooleanList.sort();
console.log(BooleanList); // doing sort of boolean will rearrange false to left and true to right.


var BooleanList = [true,"false",false,"true",'',undefined];
BooleanList.sort();
console.log(BooleanList); // ['', 'false', false, true, 'true', undefined]


console.log("learning multi D array");
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const relationalDB = ['postgres','Sql'];
const nonrelationalDB = ['mongo'];
const database = [relationalDB,nonrelationalDB]
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd , database]

console.log(fullStack);
console.log(fullStack[2][0]); //['postgres', 'Sql']

fullStack.unshift(['css','bootstrap']); 
fullStack[0].push("tailwind");
console.log(fullStack[0].push("tailwind")); 
console.log(fullStack[0].pop()); 

const arr = Array(8);
console.log(arr[0]);

let s1 = "momomomomom";
console.log(s1.split('m')); 
console.log(s1.length);


console.log("###################### Exercise #####################");
//1
var emptyArray =  Array(8);

//2
var arritem = [1,2,3,4,5,6,7];

//3
var length = arritem.length;

//4
var i = arritem[0];
console.log(i);
console.log(arritem[length-1]);
console.log(arritem[(length-1) /2]);

//5
var mixarr = [1,'2',"name",true,undefined,{name:"Gokul"}];
console.log(mixarr);

//6 
var itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies);

//8
console.log("Companies length :"+itCompanies.length);

//9
console.log(itCompanies[i]);
console.log(itCompanies[length-1]);
console.log(itCompanies[(length-1) /2]);

//10
console.log("printing each company");
itCompanies.forEach(x=> console.log(x));
console.log(itCompanies.toString() + " are big IT companies" );


//slice first 3
console.log(itCompanies.slice(0,3));

//last 3
var len = itCompanies.length;
console.log(itCompanies.slice(len-3,len));
itCompanies.shift();
var remaining  = itCompanies.splice(0,1);
console.log(itCompanies);

//remove all

itCompanies.splice(0);

//Exercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort());

function FindMedian (){
    Math.median(ages);
}












