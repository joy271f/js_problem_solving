// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatedPassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  for (i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * charset.length);
    password += charset[randomChar];
  }

  return password;
};

const passwordLength = 12;
const password = generatedPassword(passwordLength);
console.log(password);
