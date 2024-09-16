// WPP_10.

// Write a JavaScript program to produce a new string
//  that has the first 3 characters in lower case from a given string.
//  If the string length is less than 3 convert all the characters to uppercase.


let str = "AbbasGawali";

const genStr = (str) => {
    if (str.length <= 3) {
        return str.toUpperCase();
    } else {
        return str.slice(0, 3).toLowerCase() + str.slice(3);
    }


}


console.log(genStr(str));
console.log(genStr("JAVAScript"));
 