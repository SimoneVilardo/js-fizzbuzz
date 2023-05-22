"use strict";

for (let number = 1; number <= 100; number++){

    if (number % 3 === 0 && number % 5 === 0) {

        let number = 'FizzBuzz';
        console.log(number);
    }

    else if (number % 3 === 0) {

        let number = 'Fizz';
        console.log(number);
    }
    else if (number % 5 === 0){

        let number = 'Buzz';
        console.log(number);
    }
    
    else {
        console.log(number);
    }  
}