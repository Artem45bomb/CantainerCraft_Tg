import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";

interface IHeader {
  value: string;
  setValue: (arg:string) => void;
  setInputValue: (elem: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: FC<IHeader> = ({ value, setInputValue }) => {
  const [isShow, setIsShow] = useState(false);


  return (
    <div className="w-full bg-msu-green ">
      <div className="flex px-4 py-3 items-center gap-4">
        <div className={`flex w-8 transition-all duration-300 aspect-square  items-center justify-center ${isShow && "rounded-full bg-[#ffffff52]"}`}>
          <button
            onClick={() => {
              setIsShow((prev) => !prev);
            }}
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 5.5H15.5M0.5 0.5H15.5M0.5 10.5H15.5"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <span className="text-white">Chats</span>
      </div>
      <div className="flex items-center w-full px-4 pt-1 pb-3">
        <div className="flex bg-fff010 items-center w-full rounded border-b-2 border-white py-1 px-3 pr-0">
          <input
            placeholder="Search"
            type="text"
            value={value}
            onChange={setInputValue}
            className="w-full text-base text-white"
          />
          <div className="p-3">
            <div className="relative w-6 aspect-square">
              <Image src={"/assets/icon/Search-input.svg"} fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
