"use client";
import ContentMessages from "./ContentMessages/ContentMessages";
import Header from "./Header/Header";
import Input from "./Input/Input";

export function Chat() {
  return (
    <div className="flex flex-col h-screen bg-[#1D4846] w-full h-full border rounded-lg border-white">
      <Header />

      <div className="relative max-w-full max-x-full relative h-full max-h-full">
        <div className="absolute top-1 left-1/2">
          <p className="rounded-full my-2 mx-2 px-3 py-2 bg-fff018 text-black text-sm inline-flex translate-x--1/2">
            {"7 May"}
          </p>
        </div>
        <div className="w-full absolute max-w-full max-h-full h-full scroller-chat overflow-y-scroll">
          <ContentMessages></ContentMessages>
        </div>
      </div>
      <div className="w-full self-end">
        <Input></Input>
      </div>
    </div>
  );
}
