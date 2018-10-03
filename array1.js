console.log(document.all);
console.log(document.head);
console.log(document.body);

/* second example of array*/ 
var fornavn = "obi"
var efternavn = "totakhil"
var facebook = "obi@yahoo.com"
var instagram = "har ikke"
var snapchat = "har ikke"

document.querySelector('#fornavn').textContent = 'fornavn';
document.querySelector('#efternavn').textContent = 'efternavn';
document.querySelector('#facebook').textContent = 'facebook';
document.querySelector('#instagram').textContent = 'instagram';
document.querySelector('#snapchat').textContent = 'snapchat';


let myUlElements = ['obi', 'totakhil', 'obi@yahoo.com', 'har ikke', 'har ikke'];
   //myUlElements.push("ahmad");
   //myUlElements.unshift();
   //myUlElements.pop([0]);
   //myUlElements.shift();
   console.log(myUlElements); 


document.querySelector('#fornavn').textContent = myUlElements [0] ;
document.querySelector('#efternavn').textContent = myUlElements [1];
document.querySelector('#facebook').textContent = myUlElements [2];
document.querySelector('#instagram').textContent = myUlElements [3];
document.querySelector('#snapchat').textContent = myUlElements [4];

