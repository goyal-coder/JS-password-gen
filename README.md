Password Generator 🔐
A simple and secure password generator that creates random passwords based on user-defined criteria. Users can specify the length of the password and choose to include lowercase letters, uppercase letters, numbers, and symbols.

Features ✨
Customizable Password Length: Generate passwords of any length.

Character Options: Include or exclude lowercase letters, uppercase letters, numbers, and symbols.

Secure Randomization: Uses Math.random() to ensure randomness.

Input Validation: Ensures the password length is valid and at least one character set is selected.

How It Works 🛠️
The function generatePassword takes five parameters:

length: The desired length of the password.

lower: Boolean to include lowercase letters.

upper: Boolean to include uppercase letters.

number: Boolean to include numbers.

symbol: Boolean to include symbols.

Based on the parameters, the function builds a string of allowed characters.

It then generates a random password by selecting characters from the allowed set.

If the input is invalid (e.g., length is 0 or no character set is selected), it returns an error message.

The generated password is returned and can be displayed or used as needed.

Code Structure 🧑‍💻
JavaScript
Character Sets: Predefined strings for lowercase letters, uppercase letters, numbers, and symbols.

Allowed Characters: A string is built dynamically based on user preferences.

Validation: Checks for valid password length and at least one character set.

Randomization: Uses Math.random() to select characters randomly from the allowed set.

Return Value: Returns the generated password or an error message.

How to Use 🚀
Call the generatePassword function with the desired parameters:

length: The length of the password.

lower: true to include lowercase letters, false to exclude.

upper: true to include uppercase letters, false to exclude.

number: true to include numbers, false to exclude.

symbol: true to include symbols, false to exclude.

The function will return the generated password or an error message if the input is invalid.

Use the password as needed (e.g., display it to the user or store it securely).

Credits 🙌
Nandini: For creating this fun and interactive project.

Bro Code: For the inspiration and learning resources.

W3Schools: For the amazing documentation.

Enjoy using the Password Generator! 🎉
