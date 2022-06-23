const age2 = 18
const age3 = 60

const checkAge = function(age) {
if(age && !isNaN(age)) {
   if (age < age2) {
      console.log(" You don’t have access cause your age is " + age + " It’s less then");
   } else if (age >= age2 && age < age3) {
      console.log("Welcome!");
   } else if (age > age3) {
      console.log("Keep calm and look Culture channel");
   } else {
      console.log("Technical work");
   }
} else console.log('Not an integer value')
}