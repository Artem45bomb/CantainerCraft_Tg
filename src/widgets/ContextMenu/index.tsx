"use client";
import Image from "next/image";
import { FC } from "react";

interface Props {
  chatId: string;
}

const ContextMenu: FC<Props> = ({ chatId }) => {
  console.log(chatId);
  return (
    <div className="w-52 h-64  ">
      <div className="pb-6 transition-all duration-150 border-b-2 border-gray-800 h-6 w-full text-msu-green text-xs flex bg-crystal justify-start pl-3 pt-2 font-medium hover:bg-desaturated-cyan rounded-t-xl">
        <Image
          layout="fill"
          src="/assets/icon/Open-In-New-Window.svg"
          alt="Open in new window"
          className="w-4 h-4 mr-1"
        />
        Открыть в отдельном окне
      </div>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-msu-green text-xs flex bg-crystal justify-start pl-3 pt-1 font-medium hover:bg-desaturated-cyan">
        <Image
          layout="fill"
          src="/assets/icon/Archive.svg"
          alt="Archive"
          className="h-4 w-4 mr-1"
        />
        Архивировать
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-msu-green text-xs flex bg-crystal justify-start pl-3 pt-1 font-medium hover:bg-desaturated-cyan">
        <Image
          layout="fill"
          src="/assets/icon/Secure.svg"
          alt="Secure"
          className="h-4 w-4 mr-1"
        />
        Закрепить
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-msu-green text-xs flex bg-crystal justify-start pl-3 pt-1 font-medium hover:bg-desaturated-cyan">
        <Image
          layout="fill"
          src="/assets/icon/Off-Volume.svg"
          alt="Off volume"
          className="h-4 w-4 mr-1"
        />
        Выключить уведомления
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-msu-green text-xs flex bg-crystal justify-start pl-3 pt-1 font-medium hover:bg-desaturated-cyan">
        <Image
          layout="fill"
          src="/assets/icon/Mark-as-read.svg"
          alt="Archive"
          className="h-4 w-4 mr-1"
        />
        Пометить как прочитанное
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-red-600 text-xs flex bg-crystal justify-start pl-3 pt-1 font-medium hover:bg-desaturated-cyan rounded-b-xl">
        <Image
          layout="fill"
          src="/assets/icon/Leave-the-channel.svg"
          alt="leave the channel"
          className="h-4 w-4 mr-1"
        />
        Покинуть канал
      </button>
    </div>
  );
};

export default ContextMenu;
