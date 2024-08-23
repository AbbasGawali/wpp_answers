// WPP_5.

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string

const removeChar = (str, pos) => {
    // splitting the string from the start to the position
    let leftStr = str.substr(0, pos);

    // splitting the string from the position+1 to the length of the string
    let rightStr = str.substr(pos + 1, str.length)
    
    // return the string after concatination
    return leftStr + rightStr;
}


console.log(removeChar("Hello", 0));
