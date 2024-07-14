import { FC } from "react";
import Image from "next/image";

interface Props {
  userName: string;
}

export const Header: FC<Props> = ({ userName }) => {
  return (
    <div>
      <div className="absolute top-6 left-6 flex justify-center items-center gap-1.5">
        <button className="w-6 bg-365C5E aspect-square flex items-center justify-center rounded-full">
          <div className="relative w-5 aspect-square">
            <Image src="/assets/icon/Left-icon.svg" alt="" fill />
          </div>
        </button>
        <p className="text-5BC4BB">{userName}</p>
      </div>
      <div className="h-auto mt-4 flex">
        <div className="flex w-full justify-end space-x-4 mr-6">
          <button className="relative w-6 h-6 mx-2">
            <Image src="/assets/icon/Chat-icon.svg" alt="off/on voice" fill />
          </button>
          <button className="relative w-6 h-6 mx-2">
            <Image src="/assets/icon/Voice-icon.svg" alt="off/on voice" fill />
          </button>
          <button className="relative w-6 h-6 mx-2">
            <Image
              src="/assets/icon/Add-user-icon.svg"
              alt="off/on voice"
              fill
            />
          </button>
        </div>
      </div>
    </div>
  );
};
