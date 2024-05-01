import { ChangeEvent, useState } from "react";

export const useInput = (
  valueDefault: string,
): [
  string,
  (value: string) => void,
  (elem: ChangeEvent<HTMLInputElement>) => void,
] => {
  const [value, setValue] = useState<string>(valueDefault);

  const updateValue = (elem: ChangeEvent<HTMLInputElement>) => {
    setValue(elem.target.value);
  };

  return [value, setValue, updateValue];
};
