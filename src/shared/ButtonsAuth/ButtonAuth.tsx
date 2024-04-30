import React, { FC } from "react";

interface IButtonAuth {
  children: React.ReactNode;
  onClick: (...args: any) => void;
}

export const ButtonAuth: FC<IButtonAuth> = ({ children, onClick }) => {
  return (
    <button
      className="w-full h-full relative flex justify-center py-4 bg-slate-50 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
