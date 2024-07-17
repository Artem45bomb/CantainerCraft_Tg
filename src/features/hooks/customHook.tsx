import { ChangeEvent, useState } from "react";

export const useInput = (
  valueDefault: string,
): [
  string,
  (elem: ChangeEvent<HTMLInputElement>) => void,
  (value: string) => void,
] => {
  const [value, setValue] = useState<string>(valueDefault);

  const updateValue = (elem: ChangeEvent<HTMLInputElement>) => {
    setValue(elem.target.value);
  };

  return [value, updateValue, setValue];
};
