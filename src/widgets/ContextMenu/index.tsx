"use client";
import Image from "next/image";
import { MenuPoint } from "@/widgets/ContextMenu/MenuPoint";

interface Props {
  chatId: string;
}

function ContextMenu({ chatId }: Props) {
  return (
    <div className="w-52 h-64 relative">
      <MenuPoint
        srcImage={"/assets/icon/Open-In-New-Window.svg"}
        textPoint={"Открыть в отдельном окне"}
      />
      <button className="transition-all duration-150 pb-6 h-6 w-full text-A1B0B6 text-xs flex bg-1B5155 justify-start pl-3 pt-1 font-medium hover:bg-2F4F4D font-ALM">
        <Image
          layout="intrinsic"
          width={1}
          height={1}
          src="/assets/icon/Archive.svg"
          alt="Archive"
          className="h-4 w-4 mr-1"
        />
        Архивировать
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-A1B0B6 text-xs flex bg-1B5155 justify-start pl-3 pt-1 font-medium hover:bg-2F4F4D">
        <Image
          layout="intrinsic"
          width={1}
          height={1}
          src="/assets/icon/Secure.svg"
          alt="Secure"
          className="h-4 w-4 mr-1"
        />
        Закрепить
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-A1B0B6 text-xs flex bg-1B5155 justify-start pl-3 pt-1 font-medium hover:bg-2F4F4D">
        <Image
          layout="intrinsic"
          width={1}
          height={1}
          src="/assets/icon/Off-Volume.svg"
          alt="Off volume"
          className="h-4 w-4 mr-1"
        />
        Выключить уведомления
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-A1B0B6 text-xs flex bg-1B5155 justify-start pl-3 pt-1 font-medium hover:bg-2F4F4D">
        <Image
          layout="intrinsic"
          width={1}
          height={1}
          src="/assets/icon/Mark-as-read.svg"
          alt="Archive"
          className="h-4 w-4 mr-1"
        />
        Пометить как прочитанное
      </button>
      <button className="transition-all duration-150 pb-6 h-6 w-full text-red-600 text-xs flex bg-1B5155 justify-start pl-3 pt-1 font-medium hover:bg-2F4F4D rounded-b-xl ">
        <Image
          layout="intrinsic"
          width={1}
          height={1}
          src="/assets/icon/Leave-the-channel.svg"
          alt="leave the channel"
          className="h-4 w-4 mr-1"
        />
        Покинуть канал
      </button>
    </div>
  );
}

export default ContextMenu;
