import Image from "next/image";

export default function More() {
  return (
    <button className=" w-10 h-10 rounded-full bg-[#c8d1da1f] flex justify-center items-center">
      <Image
        width={3}
        height={13}
        src="/assets/testIcons/More-icon.svg"
        alt="search"
      />
    </button>
  );
}
