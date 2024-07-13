import { FC } from "react";
import Image from "next/image";

interface Props {
  srcImage: string;
  textPoint: string;
}

export const MenuPoint: FC<Props> = ({ srcImage, textPoint }) => {
  return (
    <div className="pb-6 transition-all duration-150 border-b-2 border-gray-800 h-6 w-full text-msu-green text-xs flex bg-[#1B5155] items-center justify-start pl-3 pt-2 font-medium hover:bg-desaturated-cyan rounded-t-xl ">
      <Image
        layout="intrinsic"
        width={1}
        height={1}
        src={srcImage}
        alt="Open in new window"
        className="w-4 h-4 mr-1"
      />
      <p>{textPoint}</p>
    </div>
  );
};
