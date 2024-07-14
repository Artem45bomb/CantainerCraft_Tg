import { ChangeEvent, useState } from "react";

type UseInputFalse = [string, (elem: ChangeEvent<HTMLInputElement>) => void];
type UseInputTrue = [
  string,
  (elem: ChangeEvent<HTMLInputElement>) => void,
  (value: string) => void,
];

export const useInput = (
  valueDefault: string,
  isSetValue: boolean = true,
): UseInputTrue | UseInputFalse => {
  const [value, setValue] = useState<string>(valueDefault);

  const updateValue = (elem: ChangeEvent<HTMLInputElement>) => {
    setValue(elem.target.value);
  };

  if (!isSetValue) return [value, updateValue] as UseInputFalse;

  return [value, updateValue, setValue] as UseInputTrue;
};
