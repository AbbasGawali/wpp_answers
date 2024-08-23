// WPP_4.

// Write a JavaScript program to calculate the days left before Christmas.


// setting todaysDate
let today = new Date();

//  setting upcoming christmass Date
let christmassDate = new Date(today.getFullYear(), 11, 25);

// if christmass is just passed then setting the christmass date of next year
if (today.getMonth >= 11 && today.getDay > 25) {
    christmassDate.setFullYear(today.getFullYear() + 1)
}

// calculating the whole time of 1 day
let oneDay = 1000 * 60 * 60 * 24;

// total days left for christmass to come 
let daysLeft = Math.ceil((christmassDate - today) / oneDay);

console.log(`${daysLeft} days left for christmass to come`);
