import { FC } from "react";
import Image from "next/image";

interface Props {
  active: boolean;
  setActive: () => void;
}

export const HideButton: FC<Props> = ({ active, setActive }) => {
  return (
    <button
      onClick={setActive}
      className={"py-1 px-2.5 bg-548480 rounded-2.5xl flex gap-1.5 w-18.5"}
    >
      <div className="relative w-6 aspect-square">
        <Image
          src={active ? "/assets/icon/Up.svg" : "assets/icon/Down.svg"}
          fill
          alt={""}
        />
      </div>
      <div className="relative w-6 aspect-square">
        <Image
          src={"/assets/icon/Friends-icon.svg"}
          fill
          className={"text-white"}
          alt={""}
        />
      </div>
    </button>
  );
};
