// Declare two empty arrays named: days_of_the_week and my_schedule
let days_of_the_week = [];
let my_schedule = [];

// Push the days of the week into days_of_the_week. Fill the other array with your work schedule.
days_of_the_week.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
console.log(days_of_the_week.length);
console.table(days_of_the_week);


my_schedule.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
console.log(my_schedule.length);
console.table(my_schedule);

// Assignment 1A - for loop
for (i = 0; i < my_schedule.length ; i++) {
    console.log(my_schedule[i])

}

// Assignment 1B - my_schedule
//Use "for of" loop - console log = These are the days I am available
for (let i of my_schedule) {
    console.log(`These are the days I am avaialable: ${i}`);
 }