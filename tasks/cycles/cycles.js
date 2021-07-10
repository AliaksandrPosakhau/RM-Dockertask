const { green,yellow,blue } = require("colors");

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial
 * while -> whileFactorial
 * do..while -> doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial=1;
whileFactorial=1;
doFactorial =1;

console.log(yellow('::::::::::::::::::::::::::::::::::::::::::::::::   forFactorial  ::::::::::::::::::::::::::::::::::::::::::::::::::::::'));

for (let i=0;i<=n;++i) {    
    if(i==0){      
      forFactorial=1;
    } else forFactorial*=i;
    console.log(`${i}! factorial = ${forFactorial}`);
}

console.log(green('::::::::::::::::::::::::::::::::::::::::::::::::   whileFactorial  ::::::::::::::::::::::::::::::::::::::::::::::::::::::'));

let j=0;
while(j<=n) {  
  if(j==0){      
    whileFactorial=1;
  } else whileFactorial*=j;
  console.log(`${j}! factorial = ${whileFactorial}`);
++j;
}

console.log(blue('::::::::::::::::::::::::::::::::::::::::::::::::   doFactorial  ::::::::::::::::::::::::::::::::::::::::::::::::::::::'));
let m=0;
do {  
  if(m==0){      
    doFactorial=1;
  } else doFactorial*=m;
  console.log(`${m}! factorial = ${doFactorial}`);
++m;
} while (m<=10)


/** TODO
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 */
let str;
const substr = ["I", " love", " JS"];
str='';

for (elem in substr) {
  console.log(`ELEM - ${elem}`);
  str+=substr[elem];
}

/** TODO
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 */
let totalIncome=0;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

Object.entries(personIncomes).forEach(([key, value]) => { 
  totalIncome+=value;
});

console.log(yellow(`------------------------------------->${totalIncome}`));

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
