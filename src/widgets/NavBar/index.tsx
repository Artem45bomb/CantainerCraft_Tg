"use client";
import { useInput } from "@/features/hooks/customHook";
import { FC, Suspense } from "react";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";
import { Loader } from "./Loader";

export const NavBar: FC = () => {
  const [value, setValue, setInputValue] = useInput("");

  return (
    <div className="w-1/3 h-full bg-msu-green flex flex-col">
      <Header value={value} setInputValue={setInputValue} />
      <Suspense
        fallback={
          <div className="w-full flex justify-center">
            <Loader />
          </div>
        }
      >
        <MenuContainer filterName={value} />
      </Suspense>
    </div>
  );
};
