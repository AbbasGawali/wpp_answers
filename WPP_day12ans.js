// WPP_12.

//  Write a JavaScript program to reverse a given string.


const reverseStr = (str) => {
    let result = str.split("");
    let start = 0;
    let end = str.length - 1;
    let temp = 0;

    while (start < end) {
        temp = result[start];
        result[start] = result[end];
        result[end] = temp;
        start++;
        end--;
    }
    return result.join("");

}


console.log(reverseStr("Abbas"));