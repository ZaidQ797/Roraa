export function compressString(str, length) {
    // console.log(str);
    let newStr = "";
    if (str) {
        if (str.length > length) {
            newStr = str.slice(0, length);
            newStr += " ...";
        } else {
            newStr = str;
        }
    }

    return newStr;
}