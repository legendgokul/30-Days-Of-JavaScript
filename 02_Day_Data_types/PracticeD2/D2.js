let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(challenge.indexOf(" ")+1,challenge.length));
console.log(challenge.substring(0,challenge.indexOf("Days Of JavaScript")));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));

//11
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
company = company.split(',');
console.log(company);

//12
let replacedata = challenge.replace("JavaScript","Python")
console.log(replacedata);

//13
let charAt15 = challenge.charAt(15);
console.log(charAt15);

//14
let charCode15 = challenge.charCodeAt(15);
console.log(charCode15);

//15
console.log(challenge.indexOf('a'));

//16
console.log(challenge.lastIndexOf('a'));

//17
let line = "You cannot end a sentence with because because because is a conjunction";

let index = line.indexOf("because");
console.log(index);

index = line.lastIndexOf("because");
console.log(index);

// this returns the string.
let string = 'I Love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match(/love/g));  // g means search whole sentence and return all matching words
console.log(string.match(/love/i));  // i means search for 1 word without case sensitive.
console.log(string.match(/love/gi)); // search all without case sensitive.

// returns the index which satisfies the regex
console.log(string.search(/love/));  
console.log(string.search(/love/gi)); // search all without case sensitive.

//18
console.log(challenge.startsWith("30"));

//19
console.log(challenge.endsWith("pt"));

//25
console.log(challenge.repeat(5));

//Exercise 2 :
//1
let Quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(Quote);

//2

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3
if(typeof '10' != typeof 10){
console.log(parseInt('10'));
}

 

//Exercise 3
console.log("Exercise 3 start");
//1
let loveString = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let lovelist = loveString.match(/love/gi);
console.log(lovelist.length);


//2
let becauseString = "You cannot end a sentence with because because because is a conjunction";
console.log(becauseString.match(/because/gi).length);


//3
let sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

//below code is not optimised and we learnt just like replace which changes first occuring variable, replace all will change all occurance.
console.log(sentence.replaceAll('%','').replaceAll('@','').replaceAll('$','').replaceAll('&','').replaceAll('#',''));
/* 
in below regex we are looking for character from A-Z or a-z or 0-9 and spaces.
if we place ^ inside character class which is [] , then it means NOT operation , replace everything that does not match the patern which is provided to right of ^ symbol.
*/
console.log(sentence.replace(/[^A-Za-z0-9 ]/g,''));


//4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regex = /\d+/g
let matchedList = text.match(regex);
console.log(matchedList);

let totalSum = parseInt(matchedList[0])*12 + parseInt(matchedList[1]) + parseInt(matchedList[2])*12

console.log(totalSum);






