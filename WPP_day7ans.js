// WPP_7.

//Write a js program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const createStr = (str) => {
    let backStr = str.slice(-3, str.length);
    return backStr + str + backStr;
}


console.log(createStr("mystring"));