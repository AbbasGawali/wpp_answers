// WPP_11.

//  Write a JavaScript program to check whether three given numbers are increasing
// in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31



const checkNumber = (a, b, c) => {
    if (a < b && b < c && a < c) {
        console.log("Strict Mode")
    }
    else if (a >= b && b <= c && c > a) {
        console.log("Soft Mode");
    } else {
        console.log("Invalid Input")
    }
}

checkNumber(10, 15, 31)
checkNumber(24, 22, 31)
checkNumber(22, 22, 31)
checkNumber(50, 21, 15);