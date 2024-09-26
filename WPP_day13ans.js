// WPP_13. 

// Write a JavaScript program to count the number of vowels in a given string.


const checkNoOfVowels = (str) => {
    let count = 0;
    let set = new Set(["a", "e", "i", "o", "u"]);
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}


console.log(checkNoOfVowels("ravi"));