console.log("question 1");


for(let i=1; i<= 100; i++){
    if( i % 3 && i % 5){
        console.log(i)
    }
     else{
        if(i%3 == 0 || i == 15){
            console.log("fizz", i)
        }
        if(i%5 == 0){
            console.log("buzz", i)
        }
       if( i === 15){
           console.log("fizzbuzz")
       }
    }
}
 
