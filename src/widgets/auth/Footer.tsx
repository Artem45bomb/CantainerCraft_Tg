import Image from "next/image";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-500 bg-DDE5FF flex max-w-screen w-full h-[9%] min-h-16 fixed bottom-0 left-0 right-0 z-auto">
      <div className=" w-1/2 flex justify-start items-center relative">
        <Image
          width={"100"}
          height={"100"}
          src="assets/icon/Logo-icon.svg"
          alt="Logo"
          className=" tablet:w-auto tablet:max-ml-27 tablet:min-h-12 tablet:h-[91.74%] tablet:overflow-visible tablet:mr-[3%] tablet:ml-[14.3229%] tablet:max-h-28 fourK:max-h-40"
        />
        <span className="text-xl-4 pt-4 fourK:text-7xl text-1E2E66">
          LinkNet
        </span>
      </div>
      <div className="w-1/2 flex justify-end items-center tablet:pr-[7.8%]">
        <span className="pr-32 tablet:pr-[5%] tablet:text-lg desktop:text-xl fourK:text-4xl">
          Contact/ Bug report
        </span>
      </div>
    </div>
  );
}
