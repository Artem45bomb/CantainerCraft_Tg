const errorText = {
  latinNot: "the text must contain Latin letters",
  emailValidate: "email entered incorrectly",
  passwordValidate:
    "The password must contain the letters a-Z and the signs @-#",
};

const isLatin = (text: string): boolean => {
  const latinRegex = /^[a-zA-Z#*@":;]+$/;
  return latinRegex.test(text);
};

const isEmail = (text: string): boolean => {
  let bool = false;
  let count = 0;
  for (const s of text) {
    if (s === "@" && count === 0) {
      count += 1;
      bool = true;
    } else if (s === "@" && count !== 1) return false;
  }
  return bool;
};

export const isPassword = (text: string): boolean => {
  const lettersRegex = /^[A-Z]+$/;
  const signsRegex = /^[!"@#$ ;:%^&?\/*\-_+=]+$/;
  const arabicNumbers = /[0-9]/;

  if (!lettersRegex.test(text) || text.length > 16 || text.length < 8) {
    return false;
  }

  return signsRegex.test(text) && arabicNumbers.test(text);
};

export const checkComplixityPassword = (text: string): string => {
  const upperCaseRegex = /[A-Z]/;
  const specialCharsRegex = /[!"@#$ ;:%^&?\/*\-_+=]/;
  const numbersRegex = /[0-9]/;

  let count = 0;
  let repetitions = 0;

  for (let i of text) {
    if (
      upperCaseRegex.test(i) ||
      specialCharsRegex.test(i) ||
      numbersRegex.test(i)
    ) {
      count += 1;
    }
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1] || text[i] === text[i + 2]) {
      repetitions += 2;
    }
  }

  if (text.length - 8 + count - repetitions > 14) {
    return "Strong";
  } else if (
    text.length - 8 + count - repetitions > 6 &&
    text.length - 8 + count - repetitions <= 14
  ) {
    return "Medium";
  } else {
    return "Weak";
  }
};

export const checkEmail = (email: string): boolean | string => {
  if (isLatin(email) !== true) return errorText.latinNot;

  if (isEmail(email) !== true) return errorText.emailValidate;

  return true;
};

export const checkName = (name: string): boolean | string => {
  if (isLatin(name) !== true) return errorText.latinNot;

  return true;
};

export const checkPassword = (password: string): boolean | string => {
  if (isLatin(password) !== true) return errorText.latinNot;

  if (isPassword(password)! == true) return errorText.passwordValidate;

  return true;
};
