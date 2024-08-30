// WPP_6.

//Write a js program to check wheather a given positive number is multiple of 3 or 7.

const checkMultiple = (num) => {
    if (num % 3 === 0) {
        console.log("Number is multiple of 3");
    } else if (num % 7 === 0) {
        console.log("Number is multiple of 7");
    } else {
        console.log("Invalid Number")
    }
}

checkMultiple(49)