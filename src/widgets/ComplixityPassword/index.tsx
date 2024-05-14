"use client";

import { checkComplixityPassword, isPassword } from "@/features/api/util/form";
import { ChangeEvent, FormEvent, useState } from "react";

const InputPasswordLabel = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value == "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };

  const handleLabelClick = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative ">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleLabelClick}
        onBlur={handleInputBlur}
        className={`m-2 w-48 h-8 border rounded-lg p-2 pl-4 transition-all duration-300 focus:w-48 focus:top-0 focus-left-0 absolute border-black focus:border-blue-500 focus:border-2 
                ${checkComplixityPassword(inputValue) == "Weak" && inputValue.length > 0 ? " focus:border-red-500 border-red-500 text-red-500" : ""} 
                ${checkComplixityPassword(inputValue) == "Medium" && inputValue.length > 0 ? " focus:border-yellow-500 border-yellow-500 text-yellow-500" : ""} 
                ${checkComplixityPassword(inputValue) == "Strong" && inputValue.length > 0 ? " focus:border-green-500 border-green-500 text-green-500" : ""}  
                ${inputValue.length > 0 ? "focus:border-blue-500 focus:border-2.5" : ""}
                ${isPassword(inputValue) == false ? " text-white" : ""}`}
        placeholder=""
      />
      <label
        className={`absolute top-3 left-4 text-gray-700 transform duration-100 
                ${checkComplixityPassword(inputValue) == "Weak" && inputValue.length > 0 ? " focus:border-red-500 border-red-500 text-red-500" : ""} 
                ${checkComplixityPassword(inputValue) == "Medium" && inputValue.length > 0 ? " focus:border-yellow-500 border-yellow-500 text-yellow-500" : ""} 
                ${checkComplixityPassword(inputValue) == "Strong" && inputValue.length > 0 ? " focus:border-green-500 border-green-500 text-green-500" : ""} 
                ${inputValue != "" || isFocused == true ? "-translate-y-3.5 text-xs bg-white text-blue-600 " : "pointer-events-none "}`}
      >
        Password
      </label>
      <label
        className={`text-xs absolute top-10 left-4
                ${checkComplixityPassword(inputValue) == "Weak" && inputValue.length > 0 ? "text-red-500" : "hidden"} `}
      >
        Password is weak
      </label>
      <label
        className={`text-xs absolute top-10 left-4
                ${checkComplixityPassword(inputValue) == "Medium" && inputValue.length > 0 ? "text-yellow-500" : "hidden"} `}
      >
        Password is medium
      </label>
      <label
        className={`text-xs absolute top-10 left-4
                ${checkComplixityPassword(inputValue) == "Strong" && inputValue.length > 0 ? "text-green-500" : "hidden"} `}
      >
        Password is strong
      </label>
    </div>
  );
};

export default InputPasswordLabel;
