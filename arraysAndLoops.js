// Declare two empty arrays named: days_of_the_week and my_schedule
let days_of_the_week = [];
let days = [];

// Push the days of the week into days_of_the_week. Fill the other array with your work schedule.
days_of_the_week.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
console.log(days_of_the_week.length);
console.table(days_of_the_week);


days.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
console.log(days.length);
// console.table(my_schedule);

// Assignment 1A - for loop (regular for loop)
for (i = 0; i < days.length ; i++) {
    console.log("I work " + days[i])

}

// Assignment 1B - my_schedule
//Use "for of" loop - console log = These are the days I am available
for (let day of days) {
    console.log('These are the days I am avaialable: ' + day);

 }

 // Assignment 1C - my_schedule
//Use "for in" loop - console log = These are the index for the days I am available
// for (let i in my_schedule) {
// console.log('These are the index for the days I am available: ' + i);
// }

//Assignment 1D - days_of_the_week
//Use "for of" loop - console log = These are the days of the week
// for (let positionOfDays of days_of_the_week) {
//     console.log('This is the index value: ' + positionOfDays);

//  }

 //Assignment 1E - days_of_the_week
//Use "for in" loop - console log = These are the index for the days of the week
for (let position in days_of_the_week) {
    console.log('These are the index for the days of the week: ' + position);
    }