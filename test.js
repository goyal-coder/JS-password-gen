function generatePassword(length, lower, upper, number, symbol) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-";

    let allowedChars = "";
    let password = "";

    allowedChars += lower ? lowercaseChars : "";
    allowedChars += upper ? uppercaseChars : "";
    allowedChars += number ? numberChars : "";
    allowedChars += symbol ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(at least one set of characters need to be selected.)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

// you can use user input too with prompt or actually a normal html element with checkboxes.
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbols);

console.log(`Your password is ${password}`);