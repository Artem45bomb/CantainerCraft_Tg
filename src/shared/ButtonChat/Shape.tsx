import Image from "next/image";

export default function Shape() {
  return (
    <button className=" w-10 h-10 bg-[#c8d1da1f] rounded-full flex justify-center items-center">
      <Image width={17} height={17} src="/assets/testIcons/comment.svg" alt="search" />
    </button>
  );
}
