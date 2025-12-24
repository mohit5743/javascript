const firstName = 'jonas';

const job = 'developer';

//const birthYear = '2000';

const year = 2025;


//const jonas = " I'm " + firstName + ' , a ' + (year - birthYear) + ' year old ' + job + '!';

//console.log(jonas);



//template literal

//const jonasNew = `I'm ${firstName} , a ${year - birthYear}  year old ${job} !`;

//console.log(jonasNew);


//multiline string

console.log('String  \n\
multiple \n\
    lines');


console.log(`String
multiple
lines`);



const age = 15;




if (age >= 18) {
    console.log('you can start driving license');
} else {
    const yearLeft = 18 - age;
    console.log(`you have to wait ${yearLeft} years.`)
}


/*conntrol structure
if (condition) {

} else {

}*/



const birthYear = 2008;

let century;

if (birthYear <= 2000) {
    century = 20;


} else {
    century = 21;

}

console.log(century);




const inputYear = '1991';
console.log(Number(inputYear), inputYear);

const y = Number(inputYear);
console.log(y + 18);

const name = 'jonas';
console.log(Number(name));


// NaN means its a invalid number 

console.log(String(23), 23);

//type coercion


console.log('I am' + ' 23 ' + 'year old');


console.log('23' - '10' - 3);

console.log(('23' + '10') + 3);

console.log('23' * '2');



let n = '1' + 1;

console.log(n);
n = n - 1;

console.log(n);


//truthy and falsy value 
/* 5 faly value are 0,'',undefined,null,NaN ETC*/



const money = 1011;

if (money) {
    console.log('dont spend any more');
} else {
    console.log('look for a job');
}


let height = 10;

if (height) {
    console.log('height is defined ');
}
else {
    console.log('height is undefined');
}



const aage = '18';

if (aage === 18) console.log('you are an adult');

//  === is a strict operator because it does not perform type coercion


// == is  a loosely operator because it perform type coercion i t will only check the value not its type 

if (aage == 18) console.log('you are an adult (loose)');



const favourite = Number(prompt("what's your favourite number"));

console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool');
} else if (favourite === 7) {
    console.log('cool');
} else {
    console.log('false');
}



if (favourite !== 23) console.log('why not 23');



