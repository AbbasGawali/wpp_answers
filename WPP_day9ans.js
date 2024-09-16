// WPP_9.

// Write a JavaScript program to find the closest value to 100 from two numerical values.



const findWithSmallest = (num1, num2) => {

    let res1 = 100 - num1;
    let res2 = 100 - num2;

    if (res1 > res2) {
        return num2;
    }
    if (res1 < res2) {
        return num1;
    }

    return -1;

}



console.log(findWithSmallest(90, 80))
console.log(findWithSmallest(-90, -89));
console.log(findWithSmallest(-90, -90));