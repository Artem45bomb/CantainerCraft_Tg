"use client";
import LogoIcon from "@assets/icon/Logo-icon.svg";

<div className="border-b-2 border-gray-500 bg-DDE5FF flex w-full h-24">
  <div className=" w-1/2 flex justify-start items-center relative">
    <LogoIcon className="ml-27 mt-1 mr-3 w-20 h-20" />
    <span className="text-xl-4 pt-4 ">LinkNet</span>
  </div>
  <div className="w-full flex justify-end items-center pr-28">
    <button className=" w-23 h-12 text-s pt-1 border-1E2E66 text-1E2E66 bg-7289D9 rounded-3xl border-2">
      Login
    </button>
    <button className="ml-10 w-24 h-11 text-s border-7289D9 bg-1E2E66 text-7289D9 rounded-3xl border-2">
      Sign up
    </button>
  </div>
</div>;
