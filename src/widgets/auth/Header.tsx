import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="border-b-2 border-gray-500 bg-DDE5FF max-w-screen flex w-full fixed top-0 right-0 left-0 h-[9%] min-h-16">
        <div className=" w-1/2 flex justify-start h-full items-center relative">
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
        <div className="w-1/2 flex justify-end items-center  tablet:pr-[7.8%]">
          <button className="laptop:w-23 laptop:h-11 tablet:w-20 tablet:h-11 desktop:w-23 desktop:h-12 fourK:w-44 fourK:h-24 fourK:rounded-full fourK:text-3xl text-s pt-1 border-1E2E66 text-1E2E66 bg-7289D9 rounded-3xl border-2 flex items-center justify-center">
            Login
          </button>
          <button className="tablet:ml-8 laptop:ml-10 fourK:ml-24 laptop:w-23 laptop:h-11 tablet:w-20 tablet:h-11 desktop:w-23 desktop:h-12 fourK:w-44 fourK:h-24 fourK:rounded-full fourK:text-3xl text-s border-7289D9 bg-1E2E66 text-7289D9 rounded-3xl border-2 flex items-center justify-center">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
