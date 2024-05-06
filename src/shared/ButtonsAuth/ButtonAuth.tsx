import React, { FC } from "react";

interface IButtonAuth {
  children: React.ReactNode;
  onClick: () => void;
}

export const ButtonAuth: FC<IButtonAuth> = ({ children, onClick }) => {
  return (
    <button
      className="w-full h-full relative flex justify-center py-4 bg-crystal border border-msu-green rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
