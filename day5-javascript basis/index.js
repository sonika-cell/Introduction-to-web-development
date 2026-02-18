//variables in JavaScript

var fullName="Sonika Bohora"
let address='kathamndu,Nepal';
const bloodGroup='B+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//datatype

let name='Sonika';
let age=20;
let isStudent=true;
let hobbies=['sewing','travelling','vlogger'];//array

let user={
    name:'sonika',
    age:16,
isStudent:false,
hobbies:['sewing','travelling','vlogger'],
};

console.log(user['name']);
console.log(user.age);
console.log(hobbies[0]);


//functiom
function greet(name){
    console.log('Hello',name);
}
greet('sonika');

const headingElementById=document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByQuery=document.querySelector('#heading-2');
const paragraphElement=document.querySelector('.para');
paragraphElement.textContent='This is upadted paragraph';

paragraphElement.style.color='blue';
const buttonElement=document.querySelector('.btn');