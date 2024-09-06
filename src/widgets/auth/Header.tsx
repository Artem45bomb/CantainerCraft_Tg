import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="border-b-2 border-gray-500 bg-DDE5FF max-w-screen flex w-full fixed top-0 right-0 left-0 h-[10%] min-h-16">
        <div className=" w-1/2 flex justify-start h-full items-center relative">
          <Image
            width={"100"} //108
            height={"100"} //8.66 desktop:w-16 desktop:h-auto desktop:ml-27 desktop:mt-1 desktop:mr-3 384
            src="assets/icon/Logo-icon.svg"
            alt="Logo"
            className=" tablet:w-auto tablet:max-ml-27 tablet:min-h-12 tablet:h-[91.74%] tablet:overflow-visible tablet:mr-[3%] tablet:ml-[14.3229%]"
          />
          <span className="text-xl-4 pt-4 text-1E2E66">LinkNet</span>
        </div>
        <div className="w-1/2 flex justify-end items-center  tablet:pr-[7.8%]">
          <button className=" w-23git  h-12 text-s pt-1 border-1E2E66 text-1E2E66 bg-7289D9 rounded-3xl border-2">
            {/* w-23 */}
            Login
          </button>
          <button className="ml-10 w-24 h-11  text-s border-7289D9 bg-1E2E66 text-7289D9 rounded-3xl border-2">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
