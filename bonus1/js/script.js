"use strict";

const ul = document.querySelector('ul');

for (let number = 1; number <= 100; number++){

    const li = document.createElement('li');
    
    li.append(number);
    
    ul.append(li);

    if (number % 3 === 0 && number % 5 === 0) {

        li.innerText = 'FizzBuzz';
    }

    else if (number % 3 === 0) {

        li.innerText = 'Fizz';
    }
    else if (number % 5 === 0) {

        li.innerText = 'Buzz';
        
    }

    else {

        li.innerText = number

    }
    
}