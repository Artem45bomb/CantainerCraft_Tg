import { ChangeEvent, SetStateAction, Dispatch, FC } from "react";
import Image from "next/image";

interface IHeader {
  isActivePanel: boolean;
  setActivePanel: Dispatch<SetStateAction<boolean>>;
  setInputValue: (elem: ChangeEvent<HTMLInputElement>) => void;
  onSearchCb: () => void;
}

export const Header: FC<IHeader> = ({
  setInputValue,
  onSearchCb,
  setActivePanel,
  isActivePanel,
}) => {
  return (
    <div className="w-full bg-msu-green ">
      <div className="flex py-3 items-center gap-4">
        <div
          className={`pl-4 flex transition-all duration-300 aspect-square  items-center justify-center ${isActivePanel && "rounded-full bg-[#ffffff52]"}`}
        >
          <button onClick={() => setActivePanel((prevState) => !prevState)}>
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
      <div className="flex items-center w-full pl-4 pr-2">
        <div className="flex bg-fff010 items-center w-full rounded border-b-2 border-white pl-2.5">
          <input
            placeholder="Search"
            type="text"
            onChange={setInputValue}
            className="w-full text-base text-white"
          />
          <button
            className="relative w-6 aspect-square mr-3 my-2"
            onClick={onSearchCb}
          >
            <Image src={"/assets/icon/Search-input.svg"} fill alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
