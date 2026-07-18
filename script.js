// Number
let number = 153;

// Variable for sum of first n numbers
let n = 10;

// Variables
let sum = 0;
let isPrime = true;
let sumOfDigits = 0;
let armstrongSum = 0;
let originalNumber = number;
let digit;
let factors;


// Sum of first N numbers
for(let i = 1; i <= n; i++){
    sum = sum + i;
}

console.log("Sum of first", n, "numbers:", sum);


// Table of number n
console.log("Table of", n);

for(let i = 1; i <= 10; i++){
    console.log(n, "x", i, "=", (n * i));
}


// Prime Number
if(number <= 1){
    isPrime = false;
}

for(let i = 2; i < number; i++){
    if(number % i == 0){
        isPrime = false;
    }
}

if (isPrime == true){
    console.log("Is", number, "a Prime Number? Yes");
}

else{
    console.log("Is", number, "a Prime Number? No");
}


// Factors
console.log("Factors: ");

for(let i = 1; i <= number; i++){
    if(number % i == 0){
        console.log(i);
    }
}


// Sum of digits
while(originalNumber > 0){
    digit = originalNumber % 10;
    sumOfDigits = sumOfDigits + digit;
    originalNumber = (originalNumber - digit) / 10;
}

console.log("Sum of digits:", sumOfDigits);


// armstrong number
while(originalNumber > 0){
    digit = originalNumber % 10;
    armstrongSum = armstrongSum + digit ** 3;
    originalNumber = (originalNumber - digit) / 10;
}

if(armstrongSum == number){
    console.log("Is it an Armstrong number? Yes");
}

else{
    console.log("Is it an Armstrong number? No");
}