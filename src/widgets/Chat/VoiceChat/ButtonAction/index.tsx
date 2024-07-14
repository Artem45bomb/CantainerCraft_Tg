import { FC } from "react";
import Image from "next/image";

interface Props {
  clickCb: () => void;
  srcImage: string;
  className?: string;
  alt?: string;
}

export const ButtonAction: FC<Props> = ({
  clickCb,
  className,
  srcImage,
  alt,
}) => {
  return (
    <button
      className={`relative transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full
     ${className}`}
      onClick={clickCb}
    >
      <div className="relative w-10 h-10">
        <Image fill src={srcImage} alt={alt || ""} />
      </div>
    </button>
  );
};
