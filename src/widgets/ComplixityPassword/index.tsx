import React from "react"; // Import React if not already imported
import { checkComplixityPassword } from "@/features/api/util/form";

const ComplixityPassword = ({ password }: { password: string }) => {
  return (
    <div className="relative w-60 h-8 border-2  border-desaturated-cyan rounded-lg">
      <div
        className={`absolute w-full h-full transition-all
                ${checkComplixityPassword(password) === "Weak" && password.length > 0 ? "bg-red-500 w-1/3" : ""} 
                ${checkComplixityPassword(password) === "Medium" && password.length > 0 ? "bg-yellow-500 w-2/3" : ""} 
                ${checkComplixityPassword(password) === "Strong" && password.length > 0 ? "bg-green-500" : ""} `}
      ></div>
    </div>
  );
};

export default ComplixityPassword;
