function checkHex(input) {
    var check, code, len;
    if(typeof input == 'string') {        // check it's a string
        if(input[0] === "#") {            // and it starts with #
            len = input.length;
            
            if (len === 4 ) { // and it's 4 or 7 characters
                input = input.toLowerCase(); // convert to lower case
                // parse it as hex and output as hex with # prefix
                check = '#' + ('00000000' + parseInt(input.substr(1), 16).toString(16)).substr(1 - len);
                // check it's the same number
                return check === input;
            }
        }
    }
    // all other conditions fall thru to here
    return false;
}
console.log(checkHex("#FFF")); // true
console.log(checkHex("#e3e3e3")); // false
console.log(checkHex("#ata910")); // false
