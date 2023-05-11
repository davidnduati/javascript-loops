//q3
alert("This is a program to compare 2 values");

let value2 = prompt("Enter a value to compare: ")
let value3 = prompt("Enter a second value to compare: ");

switch (true) {
    case (value2 < value3):
        console.log("The value3 is closer to 100 is: " + value3);
        break;

    case (value2 > value3):
        console.log("The value is closer to 100 is :" + value2);
        break;
    default: console.log("out of context");
}

//q2

let guess = prompt("enter a number to guess");
let guess1 = parseInt(guess);

const actual_guessed = Math.floor(Math.random() * 10) + 1;
console.log(actual_guessed);

if (actual_guessed === guess1) {
    console.log("good work")
} else {
    console.log("not matched")
}

//q4


let i = 1;
while (i <= 40) {
    i++;
    switch (true) {
        case (i % 3) === 0:
            console.log("fizz");
            continue;
        case (i % 5 === 0):
            console.log("buzz");
            continue;
        case (i % 3 === 0 && i % 5 === 0):
            console.log(FizzBuzz);
            continue;
        default:
            console.log(i);
            break;
    }



}

//q5



const berries = ["berry1", "berry2", "berry3", "berry4", "berry5"];

for (let j = 0; j <= 4; j++) {
    let tati = berries[j];
    console.log("the berry is: " + tati);

}

//1

const date = new Date();

const month = date.getMonth() + 1;
let mon = month.toString()
const day = date.getDate();
let da = day.toString()
const year = date.getFullYear();

const new_date = `${mon}-${da}-${year}`;
console.log(new_date);



