console.log("Commission as per sale");

// using switch case
// console.log(Math.round(100 % 2));

let getvalue = prompt("enter number",0);
console.log(+getvalue);
let sum = 0;

switch(true){
     case (getvalue > 20000):
        let first = (10/100)*getvalue;    
        console.log(`During The year you made a sales of Rs ${getvalue} so You get the reward of Rs. ${first} On 10%`)
        // break;
    case(getvalue >= 10001 &&  getvalue <= 20000):
        let sectond = Math.round((7/100)*getvalue);
        console.log(`During The year you made a sales of Rs ${getvalue} so You get the reward of Rs. ${sectond} On 7%`);
        // break;

    case(getvalue >= 5001  &&  getvalue <= 10000 ):
         let third = Math.round((5/100)*getvalue); 
         console.log(`During The year you made a sales of Rs ${getvalue} so You get the reward of Rs. ${third} On 5%`);
        // break;
    
    case(getvalue >= 0 &&  getvalue <= 5000):
         let last = Math.round((2/100)*getvalue);
         console.log(`During The year you made a sales of Rs ${getvalue} so You get the reward of Rs. ${last} On 2%`);
        break;
    default:
        console.log("no Commision")  ;  
    
}


// using if else condition


let commision = prompt("enter number",0);
console.log(commision);

if (commision > 20000){
    let res = (10/100)*commision;
    console.log(`During The year you made a commision of Rs ${commision} so You get the reward of Rs. ${res} On 10%`);
}
else if(commision >= 10001 &&  commision <= 20000)
{
    let res = (7/100)*commision;
    console.log(`During The year you made a commision of Rs ${commision} so You get the reward of Rs. ${res} On 7%`);
}
else if(commision >= 5001  &&  commision <= 10000){
    let res = (5/100)*commision;
    console.log(`During The year you made a commision of Rs ${commision} so You get the reward of Rs. ${res} On 5%`);
}

else if(commision >= 0 &&  commision <= 5000){
    let res = (2/100)*commision;
    console.log(`During The year you made a commision of Rs ${commision} so You get the reward of Rs. ${res} On 2%`);
}

else{
    console.log("no Commision")
}