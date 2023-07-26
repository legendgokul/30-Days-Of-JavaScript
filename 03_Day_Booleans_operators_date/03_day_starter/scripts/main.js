// this is your main.js script
//Day 3 Exercise lv 1:

//1
let fname = "Gokul";
let Lname = "nathan";
let country = "india";
let age = 24;
let isMarried = false;
let birthyear = new Date().getYear();

console.log(`type of fname is ${typeof fname}`);
console.log(`type of Lname is ${typeof Lname}`);
console.log(`type of age is ${typeof age}`);
console.log(`type of isMarried is ${typeof isMarried}`);
console.log(`type of birthyear is ${typeof birthyear}`);

//2
console.log('10'== 10);

//3
console.log(parseFloat('9.8'));


// Exercise lv2 :

//let base = prompt("Enter Base","base");
//let height = prompt("Enter height","height");
//console.log(`the are of the triangle is ${0.5 * base * height}`)

//Exercise level 3 : 

function formatTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
  // Get the current date and time
  const currentDate = new Date();
  
  // Format the date and time
  const formattedTime = formatTime(currentDate);
  console.log(formattedTime); // Output: "2023-07-26 09:30" (the actual time will vary based on the current date and time)
  









