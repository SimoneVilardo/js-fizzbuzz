"use strict";

const ul = document.querySelector('ul');

for (let number = 1; number <= 100; number++){

    const li = document.createElement('li');
    
    li.append(number);
    
    ul.append(li);

    if (number % 15 === 0) {

        li.innerHTML = 'FizzBuzz';
        li.classList.add('red') 
    }

    else if (number % 3 === 0) {

        li.innerHTML = 'Fizz';
        li.classList.add('yellow') 
    }
    else if (number % 5 === 0) {

        li.innerHTML = 'Buzz';
        li.classList.add('green') 
        
    }
    
}