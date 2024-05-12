import { ChangeEvent, FC } from "react";
import InputIcon from "@assets/icon/SearchInput-icon.svg";

interface IHeader {
  value: string;
  setInputValue: (elem: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: FC<IHeader> = ({ value, setInputValue }) => {
  return (
    <div className="w-full bg-msu-green">
      <div className="flex px-4 py-3 items-center gap-4">
        <div>
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 5.5H15.5M0.5 0.5H15.5M0.5 10.5H15.5"
              stroke="white"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <span className="text-white">Chats</span>
      </div>
      <div className="flex items-center w-full px-4 pt-1 pb-3">
        <div className="flex bg-fff010 items-center w-full rounded border-b-2 border-white py-1 px-3 pr-0">
          <input
            type="text"
            value={value}
            onChange={setInputValue}
            className="w-full text-base"
          />
          <div className=" text-4xl p-3">
            <InputIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
