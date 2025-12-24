const markMass = 78;

const markHeight = 1.69;

const johanMass = 92;
const johanHeight = 1.95;


const bmiMark = markMass / markHeight ** 2;

const bmiJohan = johanMass / johanHeight ** 2;


//console.log(bmiJohan, bmiMark);



//const markHigherBmi = bmiMark > bmiJohan;

//console.log(markHigherBmi);

if (bmiMark > bmiJohan) {
    console.log(`"Mark'Bmi(${bmiMark}) is higher than johan's(${bmiJohan})!"`);
} else {
    console.log(`"Johan'Bmi(${bmiJohan}) is higher than mark's(${bmiMark})!"`);
}





const scoreDolphins = (96 + 108 + 88) / 3;

const scoreKoalas = (88, 95, 123);

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('dolphins won');
} else if (scoreDolphins < scoreKoalas) {
    console.log('scoreKoalas win')
} else {
    console.log('draw')
}





const bill = 430;


const itip = bill * 15 / 100;

const tip = bill * 0.2;

const fvalue1 = bill + itip;

console.log(fvalue1);

const fvalue2 = bill + tip;
console.log(fvalue2);

const pay = bill >= 50 && bill <= 300 ? fvalue1 : fvalue2;

console.log(pay);