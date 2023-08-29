console.log(" HOF ");

let callBack = (n)=>{
    return n*n;
}
//console.log(callBack(2));


function sendEstimate(callBack){
    return callBack+3;
}
//console.log("with call back",sendEstimate(callBack(2)));

/*  
    benifit of using callback is we dont need to store the value in seperate variable before it is getting passed
    commonly used in combination with asynchronous function.
        this will make sure the second method execution waits till first method is completed.
*/

function ADDA(a){
  function ADDb(b){
    function ADDc(c){
        return a+b+c;
    }
    return ADDc;
  }
  return ADDb;
}

console.log(ADDA(5)(2)(3));

/** 
 * let me try to create a new example
 */

function returnScore(score){
    if(score > 10){
        return "score above 10 , lets rock.";
    }else{
        return "Score below 10 , we are close";
    }
}

function increaseScore(old, latest){
    var result = old+latest*2;
    return returnScore(result);
}

console.log(increaseScore(5,2));


const number = [1,2,3,7];
const sumArray = arr =>{
    let sum = 0;
    arr.forEach(function(x){
        sum +=x;
    });
  return sum;
}

console.log(sumArray(number));

/**
 * setInterval : for said interval this function will get called. 
 */

function sayHello(){
    console.log("Set time delay","hello");
}
//setInterval(sayHello,5000);

/**
 * Setting a time using setTimeout :
 */

function sayHelloPost() {
    console.log('Hello Gokul');
  }
setTimeout(sayHelloPost, 2000); 
// it prints hello after it waits for 2 seconds.


 /**
  * Map : iterate an array for each element , 
  * and executes a callback function. with each element
  */


const numbers = [20,1,2,4];
const numTwice = numbers.map(num => num*2);

console.log(numTwice);

const ScoreBoard = numbers.map(num=>{
    if(num>10){
        return "Won";
    }else{
        return "good try";
    }
});
console.log(ScoreBoard);

/**
 * Filter : filter out items which fullfills conditions and return new array.
 */
const countries1 = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];

let countriesWithLand = countries1.filter((x)=>x.includes("land"));
console.log(countriesWithLand);


const scores = [{ name: 'Asabeneh', score: 95 },{ name: 'Lidiya', score: 98 },{ name: 'Mathias', score: 80 },{ name: 'Elias', score: 50 },{ name: 'Martha', score: 85 },{ name: 'John', score: 100 }]
  
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

/**
 * Reduce : 
 * initial : starting value.
 * acc :common storage variable for result.
 * currentValue : current single entity in a loop.
 */

const numbe = [4, 2, 1, 2, 4];

// returns sum of all items in currentValue.
const sum = numbe.reduce((acc, currentValue) => {
  return acc+currentValue;
}, 0); // Initial accumulator value is 0

console.log("reduce sum",sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

const countries11 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const concatString = countries11.reduce((acc, currentValue) => {
    return acc+currentValue+", ";
}, ""); // Initial accumulator value is ''
  
console.log("reduce Concat",concatString); // reduce Concat Finland, Sweden, Denmark, Norway, IceLand, 



/**
 * Every : returns true or false if all the elements in the list satisfy the if condition.
 */

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr);


/**
 * Find : returns first element which satisfies the condition.
 *
 */

const ages = [24, 12, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log("find",age);

const score = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoree = score.find((user) => user.score > 80)
  console.log(scoree)

/**
 * findIndex : returns the index of the first element which satisfy the condition.
 */

const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]

const result = namess.findIndex((name) => name.length > 7)
console.log(result) // 0

const age1 = ages2.findIndex((age) => age < 20)
console.log(age1) // 5

/**
 * sort : sorts the array in accending or descending order
 * works best for string .
 * for numbers sort function will produce wrong result.
 */

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


/**
 * sort number 
 */

//accending
let numList = [5,2,5,6,1];
let sortList = numList.sort((a,b)=>{return a-b});
console.log(sortList);

//descending 
let sortDesc = numList.sort(function(a,b){
    return b-a;
});
console.log(sortDesc);

/**
 * Sorting an object .
 */

const Cust = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ];

/**
 * so basically inside if we can place any condition to sort 
 * like x > y or x < y , 
 * for any condition if we return 1, then it means option b should come first followed by option a, here y then x
 * if we return -1 then we need to change the order by putting x then y.
 */

  let sortCust = Cust.sort((x,y)=>{
   if( x.age < y.age) return 1;
   else return -1; 
  });

  console.log(sortCust);




/** Exercise lv 3 
 * 
 */

let language = {};
function MostSpokenLanguage(){
    countries.forEach(x=>{
        x.languages.forEach(y=>{
            //below logic will check if the key returns null or undefines if yes then assign default value as 0
            language[y] =  (language[y] || 0)+1;
        });
    });

    let ENtiry = Object.entries(language);
    console.log(ENtiry);

    let sortedList = ENtiry.sort((x,y)=>{
        if(x[1] > y[1]){
            return -1;
        }else{
            return 1;
        }
    });

    let top10 = sortedList.slice(0,10);
    console.log(top10);

};

MostSpokenLanguage();


function MostPopulated(){
    let sortCount = countries.sort((x,y)=>{
        if(x.population > y.population){
            return -1;
        }else{
            return 1;
        }
    }).slice(0,10);
    return sortCount;
}

console.log(MostPopulated());





