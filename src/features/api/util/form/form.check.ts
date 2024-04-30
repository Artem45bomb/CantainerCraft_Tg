import { count } from "console";

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
  for (let s of text) {
    if (s === "@" && count === 0) {
      count += 1;
      bool = true;
    } else if (s === "@" && count !== 1) return false;
  }
  return bool;
};

const isPassword = (text: string): boolean => {
  const lettersRegex = /^[A-Z]+$/;
  const signsRegex = /^[!"@#$;:%^&?\/*\-+=]+$/;

  if (!lettersRegex.test(text)) {
    return false;
  }

  return signsRegex.test(text);
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
