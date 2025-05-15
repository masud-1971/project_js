// Inrtroductory project on Java Script

// Add two numbers

function add(x, y){
    // const result = (x+y);
    // return result;
    return (x+y);

    
}

// console.log(add(50, 90));
let sum = add(150, 90);
console.log(sum);



// Even or Odd 

function isEven(num){
   
    return num % 2 == 0 ? "Even" : "Odd";
}


console.log(isEven(32));


// Celsius to Fahrenheit

function celsiusToFahrenheit(degree){
    return fahrenheit = (degree * 9)/5 + 32;

}

console.log(celsiusToFahrenheit(100));



// Square of a number

function squareOfNumber(num){
    return num * num;
}

console.log(squareOfNumber(11)); 




// First character of a string

function firstChar(str){
    return str.charAt(0);

}
console.log(firstChar("Hello! Ostad."));



// Whether a number is positive or Negative

function positiveOrNegative(num){
    return num < 0 ? "Negative" : "Positive";
}

console.log(positiveOrNegative(-5));


