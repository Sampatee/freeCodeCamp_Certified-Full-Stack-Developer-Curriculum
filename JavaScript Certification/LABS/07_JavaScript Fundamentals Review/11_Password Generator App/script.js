const generatePassword = (passwordLength) => {
  let password = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  for (let i = 1; i <= passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

const password = generatePassword(8);
console.log(`Generated password: ${password}`);
