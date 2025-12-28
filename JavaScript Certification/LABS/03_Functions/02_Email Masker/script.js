const email = "user@domain.org";

const maskEmail = (email) => {
  const domain = email.slice(email.indexOf("@"));
  const actualEmail = email.slice(0, email.indexOf("@"));
  const maskedEmail =
    actualEmail[0] +
    "*".repeat(actualEmail.length - 2) +
    actualEmail[actualEmail.length - 1] +
    domain;
  return maskedEmail;
};

console.log(maskEmail(email));
