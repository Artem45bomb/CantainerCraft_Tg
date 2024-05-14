"use client";
import { useInput } from "@/features/hooks/customHook";
import { FC } from "react";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";

export const NavBar: FC = () => {
  const [value, setValue, setInputValue] = useInput("");

  return (
    <div className="w-1/3 h-full bg-msu-green">
      <Header value={value} setInputValue={setInputValue} />
      <div className="px-5">
        <MenuContainer filterName={value} />
      </div>
    </div>
  );
};
