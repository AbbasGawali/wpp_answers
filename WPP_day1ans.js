// WPP_1

//  Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10  : 30 : 38 PM


const printDate = () => {
    const date = new Date();
    let dayArrays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
    console.log(`Today is : ${dayArrays[date.getDay()]}.`)
    console.log(`current time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() > 12 ? "PM" : "AM"}`)
}

printDate();