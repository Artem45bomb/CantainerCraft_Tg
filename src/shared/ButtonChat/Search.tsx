"use client";

import Image from "next/image";


interface IShare{
  callback?:() => void
}

export default function Search({callback}:IShare) {
  return (
    <button
      onClick={callback}
      className="w-10 h-10 bg-[#c8d1da1f] rounded-full flex justify-center items-center">
      <Image
        width={14}
        height={14}
        src="/assets/testIcons/search.svg"
        alt="search"
      />
    </button>
  );
}
