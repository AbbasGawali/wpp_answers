// WPP_7.

//Write a js program to check wheather a string starts with "Java" return True if it does not then return False.
const checkStr = (str, subStr) => {
    if (str.startsWith(subStr)) {
        return true;
    }
    return false;
}


console.log(checkStr("Javascript", "Java"));
