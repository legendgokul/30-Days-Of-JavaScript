

const a = "hello";

/*
Testing out scopes for var and let:
Observations: 
    var : is function scoped meaning no matter where the value is initialized , 
    it will still be accessible to nearest function block

    let : let on the other hand will have scope to its nearest block,
    and a block is lines of code enclosed between 2 {}.
*/

function ScopeLearn(){
  
    if(true){
        
        let a = 10;
        console.log("inside:"+a);
    }
    console.log("outside:"+a);
}

function ScopeLearnin(){
        function innerSCope(){
            if(true){
                var a = 100;
            }
            console.log("inner inside:"+a);
        }
        innerSCope();
        console.log("inside:"+a);
    
    console.log("outside:"+a);
}
ScopeLearnin();



const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],

    /* an object can have setter and getter methods in them.*/
    getFullName:function(){
        return this.firstName+this.lastName;
    },
    setFirstName: function(fn){
        this.firstName = fn;
    }
  }

  /*
    2 ways to fetch objects values.
  */
  console.log(person.firstName);
  console.log(person["firstName"]);


  console.log("fullname  : "+person.getFullName());
  person.setFirstName("Gokul");
  console.log("fullname  : "+person.getFullName());
  person.food = "noodles";
 

  /* Setting new key to existing object.  */
  person.food = "Noodle";
  console.log(person.food);

  /* Copy existing object without affecting original. 
     we create a new object with same set of values as original object but occupying with different memory
     meaning changing value of one object will not affect original object.
  */

const copyPerson = Object.assign({}, person);
copyPerson.country ="india";
console.log(copyPerson);
console.log(person);

/* Built in methods of Object */

const keys = Object.keys(person);
console.log("key", keys)
const Values = Object.values(person);
console.log("value",Values)
const entries = Object.entries(copyPerson)
console.log("entries",entries)
console.log("check if a property exists :",Object.hasOwnProperty('name'));


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
  

/* find candidate with more skill set. */

function MaxSkillUser(){
 let max = 0;
 let maxUser = "";
 let Currentusers = Object.keys(users);
 Currentusers.forEach( x =>{
    var count = users[x].skills.length;
    if( count > max ){
        max = count;
        maxUser = users[x].email;
    }
 })
 console.log("user with max skill", maxUser +" with "+max+" skills");
}

//MaxSkillUser();

/* function to check all users with points greater than 50; */

let GreaterThan50 = function(){
    let CU = Object.keys(users);
    let count = 0;
    CU.forEach(x=>{
       if(users[x].points >= 50){
        count++;
       } 
    });
    console.log(count);
}

//GreaterThan50();

/* Advance Exercise. */


