import React from "react"; // Import React if not already imported
import { checkComplixityPassword } from "@/features/api/util/form";

const InputPasswordLabel = () => {
  const text = "111_hello_123132167";

  return (
    <div className="relative w-60 h-8 border-2  border-desaturated-cyan rounded-lg">
      <div
        className={`absolute w-full h-full 
                ${checkComplixityPassword(text) === "Weak" && text.length > 0 ? "bg-red-500 w-1/3" : ""} 
                ${checkComplixityPassword(text) === "Medium" && text.length > 0 ? "bg-yellow-500 w-2/3" : ""} 
                ${checkComplixityPassword(text) === "Strong" && text.length > 0 ? "bg-green-500" : ""} `}
      ></div>
    </div>
  );
};

export default InputPasswordLabel;
